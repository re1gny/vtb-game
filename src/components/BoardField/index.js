import React from 'react';
import styles from './index.module.scss';

export function BoardField(props) {
  const { field } = props;
  const { top, left, size } = field;

  const style = { '--top': `${top}px`, '--left': `${left}px`, '--size': `${size}px` };

  return <div className={styles.wrapper} style={style} />;
}
