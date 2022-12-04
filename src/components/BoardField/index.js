import React from 'react';
import styles from './index.module.scss';

export function BoardField(props) {
  const { top, left, size } = props;

  const style = { '--top': `${top}px`, '--left': `${left}px`, '--size': `${size}px` };

  return <div className={styles.wrapper} style={style} />;
}
