export function getFieldBySteps(fields, currentField, steps) {
  const currentFieldIndex = fields.findIndex(({ id }) => currentField.id === id) || 0;

  return fields[currentFieldIndex + steps];
}
