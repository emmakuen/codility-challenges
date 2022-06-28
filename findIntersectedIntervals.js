// Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.
// --- Examples
// Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
// Output: [2, 3], [5, 6], [7, 7]
// Explanation: The output list contains the common intervals between the two lists.
// Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
// Output: [5, 7], [9, 10]
// Explanation: The output list contains the common intervals between the two lists.

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

const findIntersectedIntervals = (intervalsA, intervalsB) => {
  if (intervalsA.length === 0 || intervalsB.length === 0) return [];

  const intersectedIntervals = [];
  let aIndex = 0;
  let bIndex = 0;

  while (aIndex < intervalsA.length && bIndex < intervalsB.length) {
    let aInterval = intervalsA[aIndex];
    let bInterval = intervalsB[bIndex];

    const aIntersects =
      aInterval.start <= bInterval.start && aInterval.end >= bInterval.start;
    const bIntersects =
      bInterval.start <= aInterval.start && bInterval.end >= aInterval.start;

    if (aIntersects || bIntersects) {
      const start = Math.max(aInterval.start, bInterval.start);
      const end = Math.min(aInterval.end, bInterval.end);
      intersectedIntervals.push(new Interval(start, end));
    }

    aInterval.end < bInterval.end ? aIndex++ : bIndex++;
  }

  return intersectedIntervals;
};
