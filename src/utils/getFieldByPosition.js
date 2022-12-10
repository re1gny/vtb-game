export function getFieldByPosition(position, board) {
  return position.reduce((acc, current) => acc[current], board.layout);
}
