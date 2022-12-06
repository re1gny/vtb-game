export function getFieldIdByPosition(position, board) {
  return position.reduce((acc, current) => acc[current], board.layout).id;
}
