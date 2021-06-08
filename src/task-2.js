export default function getNthItem(a, n) {
  if (n > 0) {
    return a - 2 * getNthItem(a, n - 1);
  } else {
    return 0;
  }
}
