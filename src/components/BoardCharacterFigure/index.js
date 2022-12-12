import React from 'react';
import styles from './index.module.scss';

export function BoardCharacterFigure(props) {
  const { character, style } = props;
  const { avatar, figureBorder: FigureBorder } = character;

  return (
    <div className={styles.wrapper} style={style}>
      {FigureBorder && <FigureBorder className={styles.border} />}
      <div className={styles.avatar} style={{ backgroundImage: `url(${avatar})` }}></div>
    </div>
  );
}
