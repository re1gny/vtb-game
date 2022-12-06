export function getCharacterFigurePosition(field, character) {
  return {
    top: field.top + field.slots[character.id].top,
    left: field.left + field.slots[character.id].left,
  };
}