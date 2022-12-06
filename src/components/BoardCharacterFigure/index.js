import React from 'react';
import styles from './index.module.scss';

export function BoardCharacterFigure(props) {
  const { character, characterState, style } = props;

  return (
    <div className={styles.wrapper} style={style}>
      {characterState.fieldId}
    </div>
  );
}
