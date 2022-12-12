import React from 'react';
import cn from 'classnames';
import { Board } from '../Board';
import { DEPARTMENT_TITLE } from '../../constants/departments';
import styles from './index.module.scss';

export function BoardBlock(props) {
  const { className, department, board, characters, charactersState, stepDuration } = props;

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>{DEPARTMENT_TITLE[department]}</div>
      </div>
      <Board
        className={styles.board}
        board={board}
        characters={characters}
        charactersState={charactersState}
        stepDuration={stepDuration}
      />
    </div>
  );
}
