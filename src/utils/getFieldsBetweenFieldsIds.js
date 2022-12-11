import { getFieldIndexByFieldId } from './getFieldIndexByFieldId';
import { getFieldByPosition } from './getFieldByPosition';

export function getFieldsBetweenFieldsIds(startFieldId, endFieldId, board, options) {
  const includeStart = options?.includeStart;
  const includeEnd = options?.includeEnd;

  let startFieldIndex = getFieldIndexByFieldId(startFieldId, board);
  let endFieldIndex = getFieldIndexByFieldId(endFieldId, board);

  if (!~startFieldIndex || !~endFieldIndex) {
    return [];
  }

  if (!includeStart) {
    startFieldIndex += 1;
  }

  if (includeEnd) {
    endFieldIndex += 1;
  }

  return board.path.slice(startFieldIndex, endFieldIndex).map((position) => getFieldByPosition(position, board));
}
