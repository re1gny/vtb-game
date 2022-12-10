import { getFieldIndexByFieldId } from './getFieldIndexByFieldId';
import { getFieldByPosition } from './getFieldByPosition';

export function getNextFieldByFieldId(fieldId, board) {
  const fieldIndex = getFieldIndexByFieldId(fieldId, board);
  return getFieldByPosition(board.path[fieldIndex + 1], board);
}
