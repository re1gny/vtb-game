export function promisifiedSetTimeout(callback, delay) {
  return new Promise((resolve) => setTimeout(() => resolve(callback?.()), delay));
}
