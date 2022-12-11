import React from 'react';
import cn from 'classnames';
import { ReactComponent as GameSelectorLightning } from '../../assets/icons/gameSelectorLightning.svg';
import { ReactComponent as GameSelectorStar } from '../../assets/icons/gameSelectorStar.svg';
import { ReactComponent as GameSelectorHeadphones } from '../../assets/icons/gameSelectorHeadphones.svg';
import { ReactComponent as GameSelectorTarget } from '../../assets/icons/gameSelectorTarget.svg';
import { GameSelectorLayout } from '../GameSelectorLayout';
import { DEPARTMENTS, DEPARTMENT_TITLE } from '../../constants/departments';
import styles from './index.module.scss';

export function GameSelector(props) {
  const { className, onSelectDepartment } = props;

  return (
    <GameSelectorLayout className={cn(styles.wrapper, className)}>
      <div className={styles.panelWrapper}>
        <GameSelectorTarget className={styles.target} />
        <GameSelectorHeadphones className={styles.headphones} />
        <div className={styles.panel}>
          <div className={styles.title}>Выберите игру</div>
          <div className={styles.departments}>
            {DEPARTMENTS.map((department) => (
              <div key={department} className={styles.department} onClick={() => onSelectDepartment?.(department)}>
                {DEPARTMENT_TITLE[department]}
              </div>
            ))}
          </div>
        </div>
        <GameSelectorStar className={styles.star} />
        <GameSelectorLightning className={styles.lightning} />
      </div>
    </GameSelectorLayout>
  );
}
