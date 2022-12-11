export function getRandomCard(cards) {
  const index = Math.floor(Math.random() * (cards?.length || 0));
  return cards?.[index];
}
