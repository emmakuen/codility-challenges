function binaryGap(N) {
  let maxGapLength = 0;
  let gapLength = 0;
  let binaryList = [];
  let left = undefined;
  let right = undefined;

  while (N > 0) {
    const binary = N % 2;
    N = Math.floor(N / 2);
    binaryList.push(binary);
    const currentIdx = binaryList.length - 1;
    const prevIdx = binaryList.length - 2;
    if (!left && !right && binary === 1) {
      left = currentIdx;
    } else if (left && !right && binary === 1) {
      right = currentIdx;
      gapLength = right - left - 1;
      maxGapLength = Math.max(gapLength, maxGapLength);
      left = right;
      right = undefined;
    } else if (binaryList[prevIdx] === 1 && binary === 1) {
      left = currentIdx;
      right = undefined;
    } else if (left && right && binary === 0) {
      left = right;
      right = undefined;
    }
  }

  return maxGapLength;
}
