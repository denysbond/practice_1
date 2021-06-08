export default function sumDigits(n) {
  const arr = Array.from(String(n));
  const result = arr.reduce((a, b) => a + Number(b), 0);
  return result;
}
