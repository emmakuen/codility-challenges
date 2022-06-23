// We are given an array containing positive and negative numbers. Suppose the array contains a number ‘M’ at a particular index. Now, if ‘M’ is positive we will move forward ‘M’ indices and if ‘M’ is negative move backwards ‘M’ indices. You should assume that the array is circular which means two things:

// If, while moving forward, we reach the end of the array, we will jump to the first element to continue the movement.
// If, while moving backward, we reach the beginning of the array, we will jump to the last element to continue the movement.
// Write a method to determine if the array has a cycle. The cycle should have more than one element and should follow one direction which means the cycle should not contain both forward and backward movements.

// --- Examples
// Input: [1, 2, -1, 2, 2]
// Output: true
// Explanation: The array has a cycle among indices: 0 -> 1 -> 3 -> 0
// Input: [2, 2, -1, 2]
// Output: true
// Explanation: The array has a cycle among indices: 1 -> 3 -> 1
// Input: [2, 1, -1, -2]
// Output: false
// Explanation: The array does not have any cycle.

const circularArrayLoopExists = (arr) => {
  // if array length is less than two, cycle can't exist, so return false
  if (arr.length < 2) return false;

  // for each number in array, initialize fast and slow pointer to find the cycle
  for (let i = 0; i < arr.length; i++) {
    let slow = i;
    let fast = i;
    // store the sign of current number
    const sign = Math.sign(arr[i]);

    while (true) {
      slow = findNextIndexInArray(arr, sign, slow);
      fast = findNextIndexInArray(arr, sign, fast);
      if (fast !== -1) {
        fast = findNextIndexInArray(arr, sign, fast);
      }
      if (slow === -1 || fast === -1) break;
      if (slow === fast) return true;
    }
  }

  return false;
};

const findNextIndexInArray = (arr, sign, index) => {
  // as array indexes start from 0, let's use -1 to indicate the failure to find next index
  // if index is already -1, return -1
  // also if direction changes, return -1
  if (index === -1 || Math.sign(arr[index]) !== sign) return -1;

  // else, find the next index
  let nextIndex = (index + arr[index]) % arr.length;
  // if next index is less than one, add the length of arr to produce valid index
  if (nextIndex < 0) nextIndex += arr.length;
  // if the next index is equal to the previous index, the loop consists of only one item
  // as one item cannot produce cycle by itself, return -1
  if (nextIndex === index) return -1;

  // else, return the next index
  return nextIndex;
};
