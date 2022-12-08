import { getFieldIdByPosition } from './getFieldIdByPosition';
import { getInitialFieldPosition } from './getInitialFieldPosition';

export function getInitialCharactersState(characters, board) {
  const initialFieldId = getFieldIdByPosition(getInitialFieldPosition(board), board);
  return characters.reduce(
    (acc, current) => ({ ...acc, [current.id]: { active: false, skillsAmount: 0, fieldId: initialFieldId } }),
    {}
  );
}
