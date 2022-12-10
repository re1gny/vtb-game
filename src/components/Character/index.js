import React from 'react';
import cn from 'classnames';
import { CharacterAvatar } from '../CharacterAvatar';
import styles from './index.module.scss';

export function Character(props) {
  const { className, character, characterState, gameCompleted, onActivate, onUseSuperpower, onOpen } = props;
  const { name, superpower } = character;
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

  function handleOpen() {
    if (active) {
      onOpen?.();
    }
  }

  return (
    <div
      className={cn(styles.wrapper, active && styles.active, gameCompleted && styles.gameCompleted, className)}
      onClick={handleActivate}
    >
      <div className={styles.name} onClick={handleOpen}>
        {name}
      </div>
      <div className={styles.main}>
        <CharacterAvatar className={styles.avatar} character={character} gameCompleted={gameCompleted} />
        <div className={cn(styles.superpower, superpowerAvailable && styles.available)} onClick={handleUseSuperpower}>
          <div className={styles.superpowerTitle}>Суперсила</div>
          <div className={styles.superpowerValue}>{superpower}</div>
        </div>
      </div>
    </div>
  );
}
