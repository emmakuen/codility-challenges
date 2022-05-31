// Given an array arr of unsorted numbers and a target sum,
// count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are
// three different indices. Write a function to return the count of such triplets.

// --- Examples
// Input: [-1, 0, 2, 3], target=3
// Output: 2
// Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]
// Input: [-1, 4, 2, 1, 3], target=5
// Output: 4
// Explanation: There are four triplets whose sum is less than the target:
//    [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]

const tripletWithSmallerSum = (arr, target) => {
  arr.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    const current = arr[i];
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const threeSum = current + arr[left] + arr[right];
      if (threeSum >= target) {
        right--;
        while (left < right && arr[right + 1] === arr[right]) {
          right--;
        }
      } else {
        count += right - left;
        left++;
      }
    }
  }

  return count;
};
