// Given an array of positive numbers and a positive number ‘k,’
// find the maximum sum of any contiguous subarray of size ‘k’.

// --- Examples
// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].
// Input: [2, 3, 4, 1, 5], k=2
// Output: 7
// Explanation: Subarray with maximum sum is [3, 4].

const max_sub_array_of_size_k = function (k, arr) {
  let windowStart = 0;
  let maxSum = -Infinity;
  let sum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      maxSum = Math.max(sum, maxSum);
      sum -= arr[windowStart];
      windowStart++;
    }
  }

  return maxSum;
};
