export function initCharacters(characters) {
  return characters.map((character) => ({ ...character, active: false, skillsAmount: 0, field: null }));
}
