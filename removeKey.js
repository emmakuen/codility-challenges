// Given an unsorted array of numbers and a target ‘key’,
// remove all instances of ‘key’ in-place and return the new length of the array.

// --- Examples
// Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3
// Output: 4
// Explanation: The first four elements after removing every 'Key' will be [2, 6, 10, 9].
// Input: [2, 11, 2, 2, 1], Key=2
// Output: 2
// Explanation: The first two elements after removing every 'Key' will be [11, 1].

const removeKey = (arr, key) => {
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] !== key) {
      arr[left] = arr[right];
      left++;
    }
  }

  return left;
};
