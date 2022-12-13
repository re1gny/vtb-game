import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export function BoardCharacterFigure(props) {
  const { character, characterState, style } = props;
  const { avatar, figureBorder: FigureBorder } = character || {};
  const { active } = characterState || {};

  return (
    <div className={cn(styles.wrapper, active && styles.active)} style={style}>
      {FigureBorder && <FigureBorder className={styles.border} />}
      <div className={styles.avatar} style={{ backgroundImage: `url(${avatar})` }}></div>
    </div>
  );
}
