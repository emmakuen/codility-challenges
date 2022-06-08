// Given an array containing 0s, 1s and 2s, sort the array in-place.
// You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

// --- Examples
// Input: [1, 0, 2, 1, 0]
// Output: [0, 0, 1, 1, 2]
// Input: [2, 2, 0, 1, 2, 0]
// Output: [0, 0, 1, 2, 2, 2,]

const dutchFlagSort = (arr) => {
  if (arr.length < 2) return arr;
  let left = 0;
  let right = arr.length - 1;
  let i = 0;

  while (i <= right) {
    if (arr[i] === 0) {
      [arr[left], arr[i]] = [arr[i], arr[left]];
      left++;
      i++;
    } else if (arr[i] === 2) {
      [arr[i], arr[right]] = [arr[right], arr[i]];
      right--;
    } else {
      i++;
    }
  }

  return arr;
};
