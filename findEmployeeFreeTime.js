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
}

const findEmployeeFreeTime = (schedule) => {
  if (schedule === null || schedule.length === 0) return [];
  const freeTime = [];

  const allSchedule = [];

  for (const employeeSchedule of schedule) {
    allSchedule.push(...employeeSchedule);
  }

  allSchedule.sort((a, b) => a.start - b.start);

  let scheduleEnd = allSchedule[0].end;

  for (let i = 1; i < allSchedule.length; i++) {
    const currentSchedule = allSchedule[i];
    if (currentSchedule.start > scheduleEnd) {
      freeTime.push(new Interval(scheduleEnd, currentSchedule.start));
    }
    scheduleEnd = Math.max(scheduleEnd, currentSchedule.end);
  }

  return freeTime;
};
