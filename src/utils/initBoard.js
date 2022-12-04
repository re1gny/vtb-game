import { getNextBoardFieldPosition } from './getNextBoardFieldPosition';

export function initBoard(board, offsetTop = 0, offsetLeft = 0) {
  let boardWidth = 0;
  let boardHeight = 0;

  const newFields = [];

  for (let index = 0; index < board.fields.length; index++) {
    const field = board.fields[index];

    let top = offsetTop;
    let left = offsetLeft;

    const prevNewField = newFields[newFields.length - 1];

    if (prevNewField) {
      const { top: newTop, left: newLeft } = getNextBoardFieldPosition(prevNewField, field);

      top = newTop;
      left = newLeft;
    }

    if (top < 0 || left < 0) {
      const newOffsetTop = top < 0 ? offsetTop + -top : offsetTop;
      const newOffsetLeft = left < 0 ? offsetLeft + -left : offsetLeft;
      return initBoard(board, newOffsetTop, newOffsetLeft);
    }

    const newField = { ...field, top, left };
    newFields.push(newField);

    boardWidth = Math.max(boardWidth, left + newField.size);
    boardHeight = Math.max(boardHeight, top + newField.size);
  }

  return { ...board, fields: newFields, width: boardWidth, height: boardHeight };
}
