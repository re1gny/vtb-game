import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export function DefaultTaskCard(props) {
  const { className, card } = props;

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.description}>{card?.description}</div>
    </div>
  );
}
