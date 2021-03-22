function isTimeRangesIntersect(timeRange1, timeRange2) {
  if (
    timeRange1 !== null &&
    typeof timeRange1 === "object" &&
    timeRange2 !== null &&
    typeof timeRange2 === "object"
  ) {
    console.log("Time range first: " + timeRange1.join(" - "));
    console.log("Time range second: " + timeRange2.join(" - "));
    let result = timeRange1[1] >= timeRange2[0];
    return result;
  } else {
    console.log("Неверный формат данных");
  }
}
