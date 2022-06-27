// Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.
// --- Examples
// Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
// Output: [[1,3], [4,7], [8,12]]
// Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].
// Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10]
// Output: [[1,3], [4,12]]
// Explanation: After insertion, since [4,10] overlaps with [5,7] & [8,12], we merged them into [4,12].
// Input: Intervals=[[2,3],[5,7]], New Interval=[1,4]
// Output: [[1,4], [5,7]]
// Explanation: After insertion, since [1,4] overlaps with [2,3], we merged them into one [1,4].

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

const insertInterval = (intervals, newInterval) => {
  const merged = [];
  let isMerged = false;
  for (const currentInterval of intervals) {
    if (
      currentInterval.start > newInterval.end ||
      currentInterval.end < newInterval.start
    ) {
      if (currentInterval.start > newInterval.end && !isMerged) {
        merged.push(newInterval);
        isMerged = true;
      }
      merged.push(currentInterval);
    } else {
      newInterval.start = Math.min(currentInterval.start, newInterval.start);
      newInterval.end = Math.max(currentInterval.end, newInterval.end);
    }
  }

  if (!isMerged) merged.push(newInterval);

  return merged;
};
