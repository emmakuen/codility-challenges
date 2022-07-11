// We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running.
// Our goal is to find the maximum CPU load at any time if all the jobs are running on the same machine.

// Jobs: [[1,4,3], [2,5,4], [7,9,6]]
// Output: 7
// Explanation: Since [1,4,3] and [2,5,4] overlap, their maximum CPU load (3+4=7) will be when both the
// jobs are running at the same time i.e., during the time interval (2,4).
// Jobs: [[6,7,10], [2,4,11], [8,12,15]]
// Output: 15
// Explanation: None of the jobs overlap, therefore we will take the maximum load of any job which is 15.
// Jobs: [[1,4,2], [2,4,1], [3,6,5]]
// Output: 8
// Explanation: Maximum CPU load will be 8 as all jobs overlap during the time interval [3,4].

class Job {
  constructor(start, end, cpu_load) {
    this.start = start;
    this.end = end;
    this.cpuLoad = cpu_load;
  }
}

const findMaxCPULoad = (jobs) => {
  const jobsSortedByEnd = [...jobs];
  const jobsSortedByStart = jobs;
  jobsSortedByEnd.sort((a, b) => a.end - b.end);
  jobsSortedByStart.sort((a, b) => a.start - b.start);
  let maxCPULoad = 0;
  let currentCPULoad = 0;
  let startIndex = 0;
  let endIndex = 0;

  while (startIndex < jobs.length && endIndex < jobs.length) {
    if (jobsSortedByStart[startIndex].start < jobsSortedByEnd[endIndex].end) {
      currentCPULoad += jobsSortedByStart[startIndex].cpuLoad;
      startIndex++;
    } else {
      currentCPULoad -= jobsSortedByEnd[endIndex].cpuLoad;
      endIndex++;
    }

    maxCPULoad = Math.max(maxCPULoad, currentCPULoad);
  }

  return maxCPULoad;
};
