import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export function Character(props) {
  const { className, character, characterState, gameCompleted, onActivate, onUseSuperpower } = props;
  const { name, superpower, avatar, qr } = character;
  const { superpowerAvailable, active } = characterState;

  function handleActivate() {
    if (!active && !gameCompleted) {
      onActivate?.();
    }
  }

  function handleUseSuperpower() {
    if (superpowerAvailable && active && !gameCompleted) {
      onUseSuperpower?.();
    }
  }

  return (
    <div
      className={cn(styles.wrapper, active && styles.active, gameCompleted && styles.gameCompleted, className)}
      onClick={handleActivate}
    >
      <div className={styles.name}>{name}</div>
      <div className={styles.main}>
        <div className={styles.image}>
          {gameCompleted ? (
            <div className={styles.qr} style={{ backgroundImage: `url(${qr})` }} />
          ) : (
            <div className={styles.avatar} style={{ backgroundImage: `url(${avatar})` }} />
          )}
        </div>
        <div className={cn(styles.superpower, superpowerAvailable && styles.available)} onClick={handleUseSuperpower}>
          <div className={styles.superpowerTitle}>Суперсила</div>
          <div className={styles.superpowerValue}>{superpower}</div>
        </div>
      </div>
    </div>
  );
}
