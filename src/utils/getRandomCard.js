export function getRandomCard(cards) {
  const index = Math.round(Math.random() * (cards.length - 1));
  return cards[index];
}
