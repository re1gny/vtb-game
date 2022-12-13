export function pluralize(amount, [one, two, five]) {
  if (amount % 10 === 1 && amount % 100 !== 11) {
    return one;
  } else if (amount % 10 >= 2 && amount % 10 <= 4 && (amount % 100 < 10 || amount % 100 >= 20)) {
    return two;
  } else {
    return five;
  }
}
