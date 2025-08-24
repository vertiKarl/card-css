export function combine(...arr: string[]) {
  return arr.join(" ");
}

export function capitalize(str: string, amount: number = 1) {
  const section = str.slice(0, amount).toUpperCase();
  return section + str.slice(amount);
}
