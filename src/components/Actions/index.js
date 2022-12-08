import React from 'react';
import cn from 'classnames';
import { CardRandomizer } from '../CardRandomizer';
import { SKILL_RANDOMIZER, TASK_RANDOMIZER } from '../../constants/cardsRandomizers';
import styles from './index.module.scss';

export function Actions(props) {
  const { className, onRandomizeTask, onRandomizeSkill, onComplete } = props;

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.randomizers}>
        <CardRandomizer className={styles.randomizer} {...TASK_RANDOMIZER} onRandomize={onRandomizeTask} />
        <CardRandomizer className={styles.randomizer} {...SKILL_RANDOMIZER} onRandomize={onRandomizeSkill} />
      </div>
      <button className={styles.completeButton} onClick={onComplete}>
        Завершить игру
      </button>
    </div>
  );
}
