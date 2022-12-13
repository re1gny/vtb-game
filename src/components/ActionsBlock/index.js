import React from 'react';
import cn from 'classnames';
import { CardRandomizer } from '../CardRandomizer';
import { SKILL_RANDOMIZER, TASK_RANDOMIZER } from '../../constants/cardsRandomizers';
import styles from './index.module.scss';
import { CompleteButton } from '../CompleteButton';

export function ActionsBlock(props) {
  const { className, gameCompleted, onCompleteGame, taskCards, skillCards, onRandomizeTask, onRandomizeSkill } = props;

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.randomizers}>
        <CardRandomizer
          className={styles.randomizer}
          {...TASK_RANDOMIZER}
          gameCompleted={gameCompleted}
          emptyCards={!taskCards?.length}
          onRandomize={onRandomizeTask}
        />
        <CardRandomizer
          className={styles.randomizer}
          {...SKILL_RANDOMIZER}
          gameCompleted={gameCompleted}
          emptyCards={!skillCards?.length}
          onRandomize={onRandomizeSkill}
        />
      </div>
      <CompleteButton className={styles.completeButton} gameCompleted={gameCompleted} onCompleteGame={onCompleteGame} />
    </div>
  );
}
