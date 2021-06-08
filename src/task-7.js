export default function unique(data) {
  if (data.length > 0) {
    return [...new Set(data)];
  }
  return [];
}
