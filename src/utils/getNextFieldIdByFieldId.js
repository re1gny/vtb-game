import { getFieldIndexByFieldId } from './getFieldIndexByFieldId';
import { getFieldIdByPosition } from './getFieldIdByPosition';

export function getNextFieldIdByFieldId(fieldId, board) {
  const fieldIndex = getFieldIndexByFieldId(fieldId, board);
  return getFieldIdByPosition(board.path[fieldIndex + 1], board);
}
