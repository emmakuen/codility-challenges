function cyclicSort(arr) {
  if (arr.length < 2) return arr;

  let currentIdx = 0;
  while (currentIdx < arr.length) {
    let supposedIdx = arr[currentIdx] - 1;
    if (currentIdx !== supposedIdx) {
      [arr[currentIdx], arr[supposedIdx]] = [arr[supposedIdx], arr[currentIdx]];
    } else {
      currentIdx++;
    }
  }

  return arr;
}
