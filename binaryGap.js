function binaryGap(N) {
  let gapLength = 0;
  let maxGapLength = 0;
  const binariesString = (N >>> 0).toString(2);

  for (let i = 1; i < binariesString.length; i++) {
    const current = binariesString.charAt(i);
    const previous = binariesString.charAt(i - 1);

    if (
      (previous == 1 && current == 0) ||
      (gapLength > 0 && previous == 0 && current == 1)
    ) {
      maxGapLength = Math.max(maxGapLength, gapLength);
      gapLength = 1;
    } else if (gapLength > 0 && previous == 0 && current == 0) {
      gapLength++;
    }
  }
  return maxGapLength;
}
