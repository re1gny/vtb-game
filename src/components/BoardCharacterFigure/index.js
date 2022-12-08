import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export function BoardCharacterFigure(props) {
  const { character, characterState, style } = props;

  return (
    <div className={cn(styles.wrapper, characterState?.active && styles.active)} style={style}>
      {characterState.fieldId}
    </div>
  );
}
