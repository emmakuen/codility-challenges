function solution(X, A) {
  const leaves = new Array(X + 1).fill(false);
  let remaining = X;

  for (let time = 0; time < A.length; time++) {
    const location = A[time];
    if (!leaves[location]) {
      leaves[location] = true;
      remaining--;

      if (remaining === 0) return time;
    }
  }

  return -1;
}
