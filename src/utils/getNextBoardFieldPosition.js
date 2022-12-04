export function getNextBoardFieldPosition(prevField, field) {
  let top = prevField.top;
  let left = prevField.left;

  if (prevField.nextPlacement === 'top') {
    top = top - field.size;
  } else if (prevField.nextPlacement === 'right') {
    left = left + prevField.size;
  } else if (prevField.nextPlacement === 'bottom') {
    top = top + prevField.size;
  } else if (prevField.nextPlacement === 'left') {
    left = left - field.size;
  }

  return { top, left };
}
