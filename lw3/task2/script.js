function isTimeRangesIntersect(timeRange1, timeRange2) {
  if (Array.isArray(timeRange1) && Array.isArray(timeRange2)) {
    console.log("Time range first: " + timeRange1.join(" - "));
    console.log("Time range second: " + timeRange2.join(" - "));
    let result = timeRange1[1] >= timeRange2[0];
    return result;
  } else {
    console.log("Неверный формат данных");
  }
}
