// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

// --- Examples
// Input: [-3, 0, 1, 2, -1, 1, -2]
// Output: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
// Explanation: There are four unique triplets whose sum is equal to zero.
// Input: [-5, 2, -1, -2, 3]
// Output: [[-5, 2, 3], [-2, -1, 3]]
// Explanation: There are two unique triplets whose sum is equal to zero.

const searchTriplets = (arr) => {
  if (arr.length < 3) return [];

  arr.sort((a, b) => a - b);
  const triplets = [];

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    let right = arr.length - 1;
    let left = i + 1;
    while (left < right) {
      const twoSum = arr[left] + arr[right];
      if (twoSum + arr[i] === 0) {
        triplets.push([arr[left], arr[right], arr[i]]);
        left++;
        right--;
        while (left < right && arr[left] === arr[left - 1]) {
          left++;
        }
        while (left < right && arr[right] === arr[right + 1]) {
          right--;
        }
      } else {
        twoSum + arr[i] > 0 ? right-- : left++;
      }
    }
  }
  return triplets;
};
