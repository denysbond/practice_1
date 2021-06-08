export default function trim(text, maxLength) {
  if (maxLength == 0 || maxLength < 0) {
    throw new RangeError("Некорректное значение!!!");
  } else if (text.length > maxLength) {
    return text.substring(0, maxLength - 1) + "\u2026";
  } else return text;
}
