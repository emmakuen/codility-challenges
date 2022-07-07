// Given a list of intervals representing the start and end time of ‘N’ meetings, find the minimum number of rooms required to hold all the meetings.
// --- Examples
// Meetings: [[1,4], [2,5], [7,9]]
// Output: 2
// Explanation: Since [1,4] and [2,5] overlap, we need two rooms to hold these two meetings. [7,9] can
// occur in any of the two rooms later.
// Meetings: [[6,7], [2,4], [8,12]]
// Output: 1
// Explanation: None of the meetings overlap, therefore we only need one room to hold all meetings.
// Meetings: [[1,4], [2,3], [3,6]]
// Output:2
// Explanation: Since [1,4] overlaps with the other two meetings [2,3] and [3,6], we need two rooms to
// hold all the meetings.
// Meetings: [[4,5], [2,3], [2,4], [3,5]]
// Output: 2
// Explanation: We will need one room for [2,3] and [3,5], and another room for [2,4] and [4,5].
const Heap = require("collections/heap");

class Meeting {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const minMeetingRooms = (meetings) => {
  if (meetings.length < 2) return meetings.length;

  // sort meetings by starting time
  meetings.sort((a, b) => a.start - b.start);

  let minRooms = 0;
  // create a min heap to store active meetings by their ending time
  let minHeap = new Heap([], null, (a, b) => b.end - a.end);

  for (let i = 0; i < meetings.length; i++) {
    const currentMeeting = meetings[i];

    // if any meeting has ended before current meeting starts, remove them from heap
    while (minHeap.length > 0 && currentMeeting.start >= minHeap.peek().end) {
      minHeap.pop();
    }

    // add current meeting to heap
    minHeap.push(currentMeeting);

    // min heap length indicates how many rooms are needed currently
    // update min room count if currently more rooms are needed
    minRooms = Math.max(minRooms, minHeap.length);
  }

  return minRooms;
};
