export default function getTopLetter(str) {
  let map = new Map();
  let letter = "";
  let quanity = 0;
  let strArr = Array.from(str);

  strArr.map((l) => {
    if (!map.has(l)) {
      map.set(l, 1);
    } else {
      map.set(l, map.get(l) + 1);
    }
    return false;
  });

  map.forEach((value, key) => {
    if (value > quanity) {
      quanity = value;
      letter = key;
    }
  });

  return letter;
}
