import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export function GameSelectorLayout(props) {
  const { className, children } = props;

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.backdropWrapper}>
        <div className={styles.backdrop} />
      </div>
      {children}
    </div>
  );
}
