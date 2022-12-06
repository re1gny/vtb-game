import React from 'react';
import cn from 'classnames';
import { BoardField } from '../BoardField';
import { BoardCharacterFigure } from '../BoardCharacterFigure';
import styles from './index.module.scss';
import { getPositionByFieldId } from '../../utils/getPositionByFieldId';

const DEFAULT_FIELD_SIZE = 50;
const DEFAULT_CHARACTER_FIGURE_SIZE = 20;

function getFieldStyles(size, position) {
  return {
    position: 'absolute',
    top: `${size * position[0]}px`,
    left: `${size * position[1]}px`,
    width: `${size}px`,
    height: `${size}px`,
  };
}

function getCharacterFigureStyles(characterId, fieldSize, characterFigureSize, position) {
  const DEFAULT_SLOTS = {
    1: {
      top: 4,
      left: 3,
    },
    2: {
      top: 14,
      left: 6,
    },
    3: {
      top: 8,
      left: 18,
    },
    4: {
      top: 25,
      left: 20,
    },
    5: {
      top: 16,
      left: 29,
    },
    6: {
      top: 25,
      left: 3,
    },
  };

  return {
    position: 'absolute',
    top: `${fieldSize * position[0] + DEFAULT_SLOTS[characterId].top}px`,
    left: `${fieldSize * position[1] + DEFAULT_SLOTS[characterId].left}px`,
    width: `${characterFigureSize}px`,
    height: `${characterFigureSize}px`,
  };
}

export function Board(props) {
  const { className, board, characters, charactersState } = props;

  return (
    <div className={cn(styles.wrapper, className)}>
      {board.layout.map((fields, yIndex) =>
        fields.map(
          (field, xIndex) =>
            field && (
              <BoardField key={field.id} field={field} style={getFieldStyles(DEFAULT_FIELD_SIZE, [yIndex, xIndex])} />
            )
        )
      )}
      {characters.map((character) => (
        <BoardCharacterFigure
          key={character.id}
          character={character}
          characterState={charactersState[character.id]}
          style={getCharacterFigureStyles(
            character.id,
            DEFAULT_FIELD_SIZE,
            DEFAULT_CHARACTER_FIGURE_SIZE,
            getPositionByFieldId(charactersState[character.id].fieldId, board)
          )}
        />
      ))}
    </div>
  );
}
