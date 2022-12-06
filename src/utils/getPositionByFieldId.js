import { getFieldIndexByFieldId } from './getFieldIndexByFieldId';

export function getPositionByFieldId(fieldId, board) {
  return board.path[getFieldIndexByFieldId(fieldId, board)];
}
