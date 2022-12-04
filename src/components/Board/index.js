import React from 'react';
import { BoardField } from '../BoardField';
import { BoardCharacterFigure } from '../BoardCharacterFigure';
import styles from './index.module.scss';

export function Board(props) {
  const { board, characters } = props;

  const { fields, width, height } = board;

  const style = { '--width': `${width}px`, '--height': `${height}px` };

  return (
    <div className={styles.wrapper} style={style}>
      {fields.map(({ id, left, top, size }) => (
        <BoardField key={id} top={top} left={left} size={size} />
      ))}
      {characters
        .filter(({ active }) => active)
        .map(({ id, field }) => {
          const currentField = fields.find(({ id }) => field === id);
          const top = currentField.top + currentField.slots[id].top;
          const left = currentField.left + currentField.slots[id].left;
          return currentField && <BoardCharacterFigure key={id} top={top} left={left} />;
        })}
    </div>
  );
}
