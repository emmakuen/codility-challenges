// For ‘K’ employees, we are given a list of intervals representing the working hours of each employee.
// Our goal is to find out if there is a free interval that is common to all employees.
// You can assume that each list of employee working hours is sorted on the start time.

// --- Examples
// Input: Employee Working Hours=[[[1,3], [5,6]], [[2,3], [6,8]]]
// Output: [3,5]
// Explanation: Both the employees are free between [3,5].
// Input: Employee Working Hours=[[[1,3], [9,12]], [[2,4]], [[6,8]]]
// Output: [4,6], [8,9]
// Explanation: All employees are free between [4,6] and [8,9].
// Input: Employee Working Hours=[[[1,3]], [[2,4]], [[3,5], [7,9]]]
// Output: [5,7]
// Explanation: All employees are free between [5,7].
const Heap = require("collections/heap");

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  getInterval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}

class EmployeeInterval {
  constructor(interval, employeeIndex, intervalIndex) {
    this.interval = interval;
    this.employeeIndex = employeeIndex;
    this.intervalIndex = intervalIndex;
  }

  static compareIntervals = (a, b) => b.interval.start - a.interval.start;
}

const findEmployeeFreeTime = (schedule) => {
  const freeTime = [];
  if (schedule === null || schedule.length === 0) return freeTime;

  const minHeap = new Heap([], null, EmployeeInterval.compareIntervals);

  // insert first interval of each employee to heap
  for (
    let employeeIndex = 0;
    employeeIndex < schedule.length;
    employeeIndex++
  ) {
    const employeeSchedule = schedule[employeeIndex];

    if (employeeSchedule.length) {
      const firstIntervalIndex = 0;
      const firstInterval = employeeSchedule[firstIntervalIndex];
      minHeap.push(
        new EmployeeInterval(firstInterval, employeeIndex, firstIntervalIndex)
      );
    }
  }

  let previousEmployeeInterval = minHeap.peek();

  while (minHeap.length > 0) {
    const currentEmployeeInterval = minHeap.pop();
    const currentIntervalStart = currentEmployeeInterval.interval.start;
    const currentIntervalEnd = currentEmployeeInterval.interval.end;
    const previousIntervalEnd = previousEmployeeInterval.interval.end;
    // if previousInterval is not overlapping with the next interval, add the non-overlapping part to free time
    if (previousIntervalEnd < currentIntervalStart) {
      freeTime.push(new Interval(previousIntervalEnd, currentIntervalStart));
    }
    // update the previousEmployeeInterval if its end is less than the end of current interval
    if (previousIntervalEnd < currentIntervalEnd) {
      previousEmployeeInterval = currentEmployeeInterval;
    }
    // if current schedule has more schedule, add the next one to heap
    const currentEmployeeSchedule =
      schedule[currentEmployeeInterval.employeeIndex];
    if (
      currentEmployeeSchedule.length >
      currentEmployeeInterval.intervalIndex + 1
    ) {
      const nextIntervalIndex = currentEmployeeInterval.intervalIndex + 1;
      minHeap.push(
        new EmployeeInterval(
          currentEmployeeSchedule[nextIntervalIndex],
          currentEmployeeInterval.employeeIndex,
          nextIntervalIndex
        )
      );
    }
  }

  return freeTime;
};
