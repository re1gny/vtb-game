import { getFieldIndexByFieldId } from './getFieldIndexByFieldId';
import { getFieldByPosition } from './getFieldByPosition';

export function getFieldsTillFieldId(startFieldId, endFieldId, board) {
  const startFieldIndex = getFieldIndexByFieldId(startFieldId, board) + 1;
  const endFieldIndex = getFieldIndexByFieldId(endFieldId, board) + 1;

  return board.path.slice(startFieldIndex, endFieldIndex).map((position) => getFieldByPosition(position, board));
}
