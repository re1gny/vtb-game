import React from 'react';
import styles from './index.module.scss';

export function BoardCharacterFigure(props) {
  const { top, left } = props;

  const style = { '--top': `${top}px`, '--left': `${left}px` };

  return <div className={styles.wrapper} style={style} />;
}
