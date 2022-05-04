// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s,
// find the length of the longest contiguous subarray having all 1s.

const length_of_longest_subarr = function (arr, k) {
  let maxRepeatOnes = 0;
  let maxLength = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    if (arr[windowEnd] === 1) {
      maxRepeatOnes++;
    }
    if (maxRepeatOnes + k < windowEnd - windowStart + 1) {
      if (arr[windowStart] === 1) {
        maxRepeatOnes--;
      }
      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};
