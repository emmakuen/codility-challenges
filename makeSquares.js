// Given a sorted array, create a new array containing squares of all the numbers of
// the input array in the sorted order.

// --- Examples
// Input: [-2, -1, 0, 2, 3]
// Output: [0, 1, 4, 4, 9]
// Input: [-3, -1, 0, 1, 2]
// Output: [0, 1, 1, 4, 9]

const makeSquares = (arr) => {
  const arrLength = arr.length;
  if (arrLength === 0) return [];
  if (arrLength === 1) return [arr[0] ** 2];

  const squares = Array(arrLength).fill(null);
  let left = 0;
  let right = arrLength - 1;
  let squaredIdx = arrLength - 1;

  while (left <= right) {
    const leftSquared = arr[left] ** 2;
    const rightSquared = arr[right] ** 2;

    if (leftSquared < rightSquared) {
      squares[squaredIdx] = rightSquared;
      right--;
    } else {
      squares[squaredIdx] = leftSquared;
      left++;
    }
    squaredIdx--;
  }

  return squares;
};
