export function getFieldBySteps(fields, currentFieldId, steps) {
  const currentFieldIndex = fields.findIndex(({ id }) => currentFieldId === id) || 0;

  return fields[currentFieldIndex + steps];
}
