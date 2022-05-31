// Given an array with positive numbers and a positive target number,
// find all of its contiguous subarrays whose product is less than the target number.

// --- Examples
// Input: [2, 5, 3, 10], target=30
// Output: [2], [5], [2, 5], [3], [5, 3], [10]
// Explanation: There are six contiguous subarrays whose product is less than the target.
// Input: [8, 2, 6, 5], target=50
// Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5]
// Explanation: There are seven contiguous subarrays whose product is less than the target.

const Deque = require("collections/deque");

const findSmallerSubarrays = (arr, target) => {
  const results = [];
  let product = 1;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    product *= arr[right];
    while (product >= target && left <= right) {
      product /= arr[left];
      left++;
    }

    const subarrays = new Deque();
    for (let i = right; i > left - 1; i--) {
      subarrays.unshift(arr[i]);
      results.push(subarrays.toArray());
    }
  }

  return results;
};
