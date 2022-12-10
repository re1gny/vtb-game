import React, { useLayoutEffect, useRef, useState } from 'react';
import cn from 'classnames';
import useResizeObserver from 'use-resize-observer';
import { BoardField } from '../BoardField';
import { BoardCharacterFigure } from '../BoardCharacterFigure';
import { getPositionByFieldId } from '../../utils/getPositionByFieldId';
import styles from './index.module.scss';

const DEFAULT_FIELD_SIZE = 50;
const FIELD_TO_FIGURE_SIZE_COEFFICIENT = 2.8;
const DEFAULT_CHARACTER_FIGURE_SIZE = DEFAULT_FIELD_SIZE / FIELD_TO_FIGURE_SIZE_COEFFICIENT;

function getFieldStyles(size, position, horizontalOffset) {
  return {
    position: 'absolute',
    top: `${size * position[0]}px`,
    left: `${size * position[1] + horizontalOffset}px`,
    width: `${size}px`,
    height: `${size}px`,
  };
}

function getCharacterFigureStyles(characterId, fieldSize, characterFigureSize, position, horizontalOffset) {
  const FIGURE_SIZE_TO_SLOT_POSITION_COEFFICIENT = characterFigureSize / DEFAULT_CHARACTER_FIGURE_SIZE;

  const DEFAULT_SLOTS = {
    1: {
      top: 4 * FIGURE_SIZE_TO_SLOT_POSITION_COEFFICIENT,
      left: 3 * FIGURE_SIZE_TO_SLOT_POSITION_COEFFICIENT,
    },
    2: {
      top: 14 * FIGURE_SIZE_TO_SLOT_POSITION_COEFFICIENT,
      left: 6 * FIGURE_SIZE_TO_SLOT_POSITION_COEFFICIENT,
    },
    3: {
      top: 8 * FIGURE_SIZE_TO_SLOT_POSITION_COEFFICIENT,
      left: 18 * FIGURE_SIZE_TO_SLOT_POSITION_COEFFICIENT,
    },
    4: {
      top: 25 * FIGURE_SIZE_TO_SLOT_POSITION_COEFFICIENT,
      left: 20 * FIGURE_SIZE_TO_SLOT_POSITION_COEFFICIENT,
    },
    5: {
      top: 16 * FIGURE_SIZE_TO_SLOT_POSITION_COEFFICIENT,
      left: 29 * FIGURE_SIZE_TO_SLOT_POSITION_COEFFICIENT,
    },
    6: {
      top: 25 * FIGURE_SIZE_TO_SLOT_POSITION_COEFFICIENT,
      left: 3 * FIGURE_SIZE_TO_SLOT_POSITION_COEFFICIENT,
    },
  };

  return {
    position: 'absolute',
    top: `${fieldSize * position[0] + DEFAULT_SLOTS[characterId].top}px`,
    left: `${fieldSize * position[1] + DEFAULT_SLOTS[characterId].left + horizontalOffset}px`,
    width: `${characterFigureSize}px`,
    height: `${characterFigureSize}px`,
    willChange: 'left, top',
  };
}

function calculateLayoutOptions(boardElement, board) {
  const boardWidth = boardElement?.offsetWidth;
  const boardHeight = boardElement?.offsetHeight;

  const horizontalLength = board?.layout?.[0]?.length;
  const verticalLength = board?.layout?.length;

  const fieldWidth = Math.floor(boardWidth / horizontalLength);
  const fieldHeight = Math.floor(boardHeight / verticalLength);

  const fieldSize = Math.min(fieldWidth, fieldHeight);

  const fieldsWidth = fieldSize * horizontalLength;
  const horizontalOffset = (boardWidth - fieldsWidth) / 2;

  const characterFigureSize = fieldSize / FIELD_TO_FIGURE_SIZE_COEFFICIENT;

  return { fieldSize, characterFigureSize, horizontalOffset };
}

export function Board(props) {
  const { className, board, characters, charactersState } = props;

  const boardRef = useRef();

  const [fieldSize, setFieldSize] = useState(DEFAULT_FIELD_SIZE);
  const [characterFigureSize, setCharacterFigureSize] = useState(DEFAULT_CHARACTER_FIGURE_SIZE);
  const [horizontalOffset, setHorizontalOffset] = useState(0);

  function handleCalculateLayout() {
    const { fieldSize, horizontalOffset, characterFigureSize } = calculateLayoutOptions(boardRef.current, board);

    setFieldSize(fieldSize);
    setCharacterFigureSize(characterFigureSize);
    setHorizontalOffset(horizontalOffset);
  }

  useLayoutEffect(() => {
    handleCalculateLayout();
  }, []);

  useResizeObserver({ onResize: handleCalculateLayout, ref: boardRef });

  return (
    <div ref={boardRef} className={cn(styles.wrapper, className)}>
      {board.layout.map((fields, yIndex) =>
        fields.map(
          (field, xIndex) =>
            field && (
              <BoardField
                key={field.id}
                field={{ type: 'overlay' }}
                style={getFieldStyles(fieldSize, [yIndex, xIndex], horizontalOffset)}
              />
            )
        )
      )}
      {board.layout.map((fields, yIndex) =>
        fields.map(
          (field, xIndex) =>
            field && (
              <BoardField
                key={field.id}
                field={field}
                style={getFieldStyles(fieldSize, [yIndex, xIndex], horizontalOffset)}
              />
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
            fieldSize,
            characterFigureSize,
            getPositionByFieldId(charactersState[character.id].fieldId, board),
            horizontalOffset
          )}
        />
      ))}
    </div>
  );
}
