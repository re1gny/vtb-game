import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export function Character(props) {
  const { className, name, superpower, superpowerAvailable, active, onActivate, onUseSuperpower } = props;

  function handleActivate() {
    if (!active) {
      onActivate?.();
    }
  }

  function handleUseSuperpower() {
    if (superpowerAvailable && active) {
      onUseSuperpower?.();
    }
  }

  return (
    <div className={cn(styles.wrapper, active && styles.active, className)} onClick={handleActivate}>
      <div className={styles.name}>{name}</div>
      <div className={styles.main}>
        <div className={styles.avatar} />
        <div className={cn(styles.superpower, superpowerAvailable && styles.available)} onClick={handleUseSuperpower}>
          <div className={styles.superpowerTitle}>Суперсила</div>
          <div className={styles.superpowerValue}>{superpower}</div>
        </div>
      </div>
    </div>
  );
}
