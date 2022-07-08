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
class Meeting {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const minMeetingRooms = (meetings) => {
  if (meetings.length < 2) return meetings.length;

  const meetingsSortedByEnd = Array.from(meetings);
  const meetingsSortedByStart = meetings;

  meetingsSortedByStart.sort((a, b) => a.start - b.start);
  meetingsSortedByEnd.sort((a, b) => a.end - b.end);

  let minRooms = 0;
  let currentRooms = 0;
  let startIndex = 0;
  let endIndex = 0;

  while (startIndex < meetings.length && endIndex < meetings.length) {
    // if a new meeting starts before previous meeting finishes, increment the number of rooms needed
    // and increment the start index to move on to the next meeting that's starting
    if (
      meetingsSortedByStart[startIndex].start <
      meetingsSortedByEnd[endIndex].end
    ) {
      startIndex++;
      currentRooms++;
    } else {
      // if previous meeting has already finished, subtract its room from the room count
      // and move on to the next meeting that's finishing
      endIndex++;
      currentRooms--;
    }

    // we need rooms for all active meetings
    // so, if currently needed rooms are larger than min rooms, update the min rooms
    minRooms = Math.max(minRooms, currentRooms);
  }

  return minRooms;
};
