function isTimeRangesIntersect(timeRange1, timeRange2) {
  if (Array.isArray(timeRange1) && Array.isArray(timeRange2)) {
    let result = timeRange1[1] >= timeRange2[0];
    return result;
  } else {
    return false;
  }
}
