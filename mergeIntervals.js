// Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.
// --- Examples
// Intervals: [[1,4], [2,5], [7,9]]
// Output: [[1,5], [7,9]]
// Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into one [1,5].
// Intervals: [[6,7], [2,4], [5,9]]
// Output: [[2,4], [5,9]]
// Explanation: Since the intervals [6,7] and [5,9] overlap, we merged them into one [5,9].
// Intervals: [[1,4], [2,6], [3,5]]
// Output: [[1,6]]
// Explanation: Since all the given intervals overlap, we merged them into one.

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  getInterval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}

const merge = function (intervals) {
  if (intervals.length < 2) return intervals;

  // order intervals by their starting values
  intervals.sort((a, b) => a.start - b.start);
  const mergedIntervals = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const previousInterval = mergedIntervals[mergedIntervals.length - 1];

    // if previous interval overlaps with current interval
    if (previousInterval.end >= currentInterval.start) {
      // merge two intervals by updating the end of last interval
      previousInterval.end = Math.max(
        previousInterval.end,
        currentInterval.end
      );
    } else {
      // if there's no overlap, push the current interval to the array
      mergedIntervals.push(currentInterval);
    }
  }

  return mergedIntervals;
};

merged_intervals = merge([
  new Interval(1, 4),
  new Interval(2, 5),
  new Interval(7, 9),
]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].getInterval() + " ";
}
console.log(`Merged intervals: ${result}`);

merged_intervals = merge([
  new Interval(6, 7),
  new Interval(2, 4),
  new Interval(5, 9),
]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].getInterval() + " ";
}
console.log(`Merged intervals: ${result}`);

merged_intervals = merge([
  new Interval(1, 4),
  new Interval(2, 6),
  new Interval(3, 5),
]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].getInterval() + " ";
}
console.log(`Merged intervals: ${result}`);
