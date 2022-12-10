import { getFieldIndexByFieldId } from './getFieldIndexByFieldId';

export function getWinners(characters, charactersState, board) {
  const fieldIndexToCharactersMap = {};

  characters?.forEach((character) => {
    const characterFieldId = charactersState?.[character?.id]?.fieldId;
    const characterFieldIndex = getFieldIndexByFieldId(characterFieldId, board);

    if (!fieldIndexToCharactersMap[characterFieldIndex]) {
      fieldIndexToCharactersMap[characterFieldIndex] = [];
    }

    fieldIndexToCharactersMap[characterFieldIndex].push(character);
  });

  const winnersIndex = Math.max(...Object.keys(fieldIndexToCharactersMap).map(Number));
  const winners = fieldIndexToCharactersMap[winnersIndex];

  if (winners.length === characters?.length) {
    return null;
  }

  return winners;
}