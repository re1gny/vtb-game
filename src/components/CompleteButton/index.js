import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export function CompleteButton(props) {
  const { className, gameCompleted, onCompleteGame } = props;

  function handleCompleteGame() {
    if (!gameCompleted) {
      onCompleteGame?.();
    }
  }

  return (
    <button
      className={cn(styles.completeButton, gameCompleted && styles.gameCompleted, className)}
      disabled={gameCompleted}
      onClick={handleCompleteGame}
    >
      Завершить игру
    </button>
  );
}
