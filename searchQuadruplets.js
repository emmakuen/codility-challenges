// Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.

// --- Examples
// Input: [4, 1, 2, -1, 1, -3], target=1
// Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
// Explanation: Both the quadruplets add up to the target.
// Input: [2, 0, -1, 1, -2, 2], target=2
// Output: [-2, 0, 2, 2], [-1, 0, 1, 2]
// Explanation: Both the quadruplets add up to the target.

const searchQuadruplets = (arr, target) => {
  const quadruplets = [];
  arr.sort((a, b) => a - b);

  if (arr.length < 4) return [];

  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (j > i + 1 && arr[j] === arr[j - 1]) continue;

      let left = j + 1;
      let right = arr.length - 1;

      while (left < right) {
        const fourSum = arr[i] + arr[j] + arr[left] + arr[right];

        if (fourSum === target) {
          quadruplets.push([arr[i], arr[j], arr[left], arr[right]]);

          left++;
          while (left < right && arr[left] === arr[left - 1]) left++;

          right--;
          while (left < right && arr[right] === arr[right + 1]) right--;
        } else {
          fourSum > target ? right-- : left++;
        }
      }
    }
  }

  return quadruplets;
};
