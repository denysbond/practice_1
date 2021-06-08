export default function getStats(data) {
  if (data.length > 0) {
    return {
      max: Math.max(...data),
      min: Math.min(...data),
      avg:
        data.reduce((a, b) => {
          return a + b;
        }) / data.length,
    };
  }
  return {
    min: null,
    max: null,
    avg: null,
  };
}
