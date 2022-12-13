import React, { useRef, useState } from 'react';
import cn from 'classnames';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import styles from './index.module.scss';

const ON_MOVE_DELAY = 1500;

export function CharacterState(props) {
  const { className, characterState, gameCompleted, onActivate, onSkillsAmountChange, onMove } = props;
  const { skillsAmount, active } = characterState;
  const [steps, setSteps] = useState(0);

  const onMoveTimerRef = useRef(null);

  function handleStepsAmountChange() {
    if (!active || gameCompleted) {
      return;
    }

    clearTimeout(onMoveTimerRef.current);
    onMoveTimerRef.current = null;

    const newSteps = steps + 1;
    setSteps(newSteps);

    onMoveTimerRef.current = setTimeout(() => {
      onMove?.(newSteps);
      setSteps(0);
    }, ON_MOVE_DELAY);
  }

  function handleSkillsAmountChange() {
    if (active && !gameCompleted) {
      onSkillsAmountChange?.(skillsAmount + 1);
    }
  }

  function handleActivate() {
    if (!active && !gameCompleted) {
      onActivate?.();
    }
  }

  return (
    <div
      className={cn(styles.wrapper, active && styles.active, gameCompleted && styles.gameCompleted, className)}
      onClick={handleActivate}
    >
      <div className={styles.steps}>
        <span className={styles.stepsTitle}>Шаги в этот ход</span>
        <div className={styles.stepsInput}>
          <span className={styles.stepsValue}>{steps || 'Х'}</span>
          <PlusIcon className={styles.stepsIncrementButton} onClick={handleStepsAmountChange} />
        </div>
      </div>
      <div className={styles.skills}>
        <span className={styles.skillsTitle}>Количество навыков</span>
        <div className={styles.skillsInput}>
          <span className={styles.skillsValue}>{skillsAmount}</span>
          <PlusIcon className={styles.skillsIncrementButton} onClick={handleSkillsAmountChange} />
        </div>
      </div>
    </div>
  );
}
