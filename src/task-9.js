export default function merge(data) {
  let mainObject = {};

  data.forEach((obj) => {
    for (let prop in obj) {
      if (prop in mainObject) {
        mainObject[prop].push(obj[prop]);
      } else {
        mainObject[prop] = [obj[prop]];
      }
    }
  });

  return mainObject;
}
