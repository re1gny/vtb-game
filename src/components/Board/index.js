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
      {fields.map((field) => (
        <BoardField key={field.id} field={field} />
      ))}
      {characters
        .filter(({ active }) => active)
        .map((character) => (
          <BoardCharacterFigure key={character.id} fields={fields} character={character} />
        ))}
    </div>
  );
}
