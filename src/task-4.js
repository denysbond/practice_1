export default function formatTime(seconds) {
  let hours = Math.floor(seconds / 3600) % 24;
  let halfOfDay = "";

  if (hours < 12) {
    halfOfDay = "AM";
  } else {
    halfOfDay = "PM";
  }

  let hours12 = hours % 12;
  hours12 = hours12 === 0 ? 12 : hours12;
  let minutes = Math.floor((seconds % 3600) / 60);
  let sec = seconds % 60;

  function format(n) {
    return (n <= 9 ? "0" : "") + String(n);
  }

  return `${format(hours12)}:${format(minutes)}:${format(sec)} ${halfOfDay}`;
}
