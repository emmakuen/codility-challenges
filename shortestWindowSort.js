// Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.
// --- Examples
// Input: [1, 2, 5, 3, 7, 10, 9, 12]
// Output: 5
// Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted
// Input: [1, 3, 2, 0, -1, 7, 10]
// Output: 5
// Explanation: We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted
// Input: [1, 2, 3]
// Output: 0
// Explanation: The array is already sorted
// Input: [3, 2, 1]
// Output: 3
// Explanation: The whole array needs to be sorted.

const shortestWindowSort = (arr) => {
  if (arr.length < 2) return [];

  let left = 0;
  let right = arr.length - 1;

  // find first index where num is out of sort
  while (left < arr.length - 1 && arr[left] <= arr[left + 1]) {
    left++;
  }

  // if left is at the end of array, it's fully sorted
  if (left === arr.length - 1) {
    return 0;
  }

  // find last index where num is out of sort
  while (right > 1 && arr[right] >= arr[right - 1]) {
    right--;
  }

  // find max and min of unsorted subarray
  let subarrayMax = -Infinity;
  let subarrayMin = Infinity;

  for (let i = left; i < right; i++) {
    subarrayMax = Math.max(subarrayMax, arr[i]);
    subarrayMin = Math.min(subarrayMin, arr[i]);
  }

  // if num on leftside of subarray is greater than subarray min, it's out of sort
  // so move left pointer down to include that num
  while (left > 0 && arr[left - 1] > subarrayMin) {
    left--;
  }

  // if num on rightside of subarray is less than subarray max, it's out of sort,
  // so move right pointer up to include that num
  while (right < arr.length - 1 && arr[right + 1] < subarrayMax) {
    right++;
  }

  // return the length of subarray
  return right - left + 1;
};
