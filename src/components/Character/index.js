import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export function Character(props) {
  const { className, name, superpower, active, onActivate } = props;

  return (
    <div className={cn(styles.wrapper, className)} onClick={onActivate}>
      <div className={styles.name}>{name}</div>
      <div className={styles.main}>
        <div className={styles.avatar} />
        <div className={styles.superpower}>
          <div className={styles.superpowerTitle}>Суперсила</div>
          <div className={styles.superpowerValue}>{superpower}</div>
        </div>
      </div>
    </div>
  );
}
