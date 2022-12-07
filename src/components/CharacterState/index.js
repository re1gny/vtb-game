import React, { useState } from 'react';
import cn from 'classnames';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import styles from './index.module.scss';

export function CharacterState(props) {
  const { className, skillsAmount, active, onActivate, onSkillsAmountChange, onMove } = props;
  const [steps, setSteps] = useState('');

  function handleStepsChange(event) {
    const value = event.target.value;
    if (isNaN(+value)) {
      return;
    }
    setSteps(value);
    onMove?.(+value);
    setTimeout(() => setSteps(''), 500);
  }

  function handleSkillsAmountChange() {
    onSkillsAmountChange?.(skillsAmount + 1);
  }

  return (
    <div className={cn(styles.wrapper, className)} onClick={onActivate}>
      <div className={styles.steps}>
        <span className={styles.stepsTitle}>Шаги в этот ход +</span>
        <input className={styles.stepsInput} type="text" maxLength={1} value={steps} onChange={handleStepsChange} />
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
