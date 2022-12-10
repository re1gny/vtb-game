import { getFieldByPosition } from './getFieldByPosition';

export function getFieldIndexByFieldId(fieldId, board) {
  return board.path.findIndex((position) => getFieldByPosition(position, board)?.id === fieldId);
}
