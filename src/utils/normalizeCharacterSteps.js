import { getFieldIndexByFieldId } from './getFieldIndexByFieldId';
import { getFieldByPosition } from './getFieldByPosition';

export function normalizeCharacterSteps(characterFieldId, steps, board) {
  const characterFieldIndex = getFieldIndexByFieldId(characterFieldId, board);
  let normalizedSteps = steps;

  if (!~characterFieldIndex) {
    return 0;
  }

  while (!getFieldByPosition(board.path[characterFieldIndex + normalizedSteps], board)) {
    normalizedSteps -= 1;
  }

  return normalizedSteps;
}