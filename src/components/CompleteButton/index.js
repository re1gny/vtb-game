import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export function CompleteButton(props) {
  const { className, gameCompleted, onCompleteGame } = props;

  return (
    <button
      className={cn(styles.completeButton, gameCompleted && styles.gameCompleted, className)}
      disabled={gameCompleted}
      onClick={onCompleteGame}
    >
      Завершить игру
    </button>
  );
}
