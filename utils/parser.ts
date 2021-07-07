export default function parser(value: string): number {
  if (parseInt(value) < 0) {
    return -1 * parseInt(value);
  }
  return parseInt(value);
}
