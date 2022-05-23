const nearestTriplet = function (arr, target_sum) {
  let minDifference = Infinity;
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];
      const currentDifference = currentSum - target_sum;
      if (currentDifference === 0) return currentSum;

      if (
        Math.abs(currentDifference) < Math.abs(minDifference) ||
        (Math.abs(currentDifference) === Math.abs(minDifference) &&
          currentDifference < minDifference)
      ) {
        minDifference = currentDifference;
      }
      if (currentSum - target_sum > 0) {
        right--;
        while (left < right && arr[right] === arr[right + 1]) right--;
      } else {
        left++;
        while (left < right && arr[left] === arr[left - 1]) left++;
      }
    }
  }

  return target_sum - minDifference;
};
