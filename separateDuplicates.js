// Given an array of sorted numbers, separate all duplicates from it in-place.
// You should not use any extra space; move all duplicates at the end of the array
// and after moving return the length of the subarray that has no duplicate in it.

// --- Examples
// Input: [2, 3, 3, 3, 6, 9, 9]
// Output: 4
// Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
// Input: [2, 2, 2, 11]
// Output: 2
// Explanation: The first two elements after removing the duplicates will be [2, 11].

const remove_duplicates = function (arr) {
  if (arr.length < 2) return arr.length;
  let currentUniqueIdx = 1;
  let currentIdx = 1;

  while (currentIdx < arr.length) {
    const lastUniqueNum = arr[currentUniqueIdx - 1];
    if (lastUniqueNum !== arr[currentIdx]) {
      arr[currentUniqueIdx] = arr[currentIdx];
      currentUniqueIdx++;
    }
    currentIdx++;
  }

  return currentUniqueIdx;
};
