import { getFieldIdByPosition } from './getFieldIdByPosition';

export function getInitialCharactersState(characters, board) {
  const initialFieldId = getFieldIdByPosition(board.path[0], board);
  return characters.reduce(
    (acc, current) => ({ ...acc, [current.id]: { active: false, skillsAmount: 0, fieldId: initialFieldId } }),
    {}
  );
}
