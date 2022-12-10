import { getFieldByPosition } from './getFieldByPosition';
import { getInitialFieldPosition } from './getInitialFieldPosition';

export function getInitialCharactersState(characters, board) {
  const initialFieldId = getFieldByPosition(getInitialFieldPosition(board), board)?.id;
  return characters.reduce(
    (acc, current) => ({
      ...acc,
      [current.id]: { active: false, skillsAmount: 0, superpowerAvailable: true, fieldId: initialFieldId },
    }),
    {}
  );
}
