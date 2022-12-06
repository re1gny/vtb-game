export function getFieldsInRange(fields, currentFieldId, nextFieldId) {
  let currentFieldIndex = fields.findIndex(({ id }) => currentFieldId === id);

  if (!~currentFieldIndex) {
    currentFieldIndex = 0;
  }

  let nextFieldIndex = fields.findIndex(({ id }) => nextFieldId === id);

  if (!~nextFieldIndex) {
    nextFieldIndex = currentFieldIndex;
  } else {
    nextFieldIndex += 1;
  }

  return fields.slice(currentFieldIndex, nextFieldIndex);
}
