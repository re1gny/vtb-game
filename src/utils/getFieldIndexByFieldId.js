import { getFieldIdByPosition } from './getFieldIdByPosition';

export function getFieldIndexByFieldId(fieldId, board) {
  return board.path.findIndex((position) => getFieldIdByPosition(position, board) === fieldId);
}
