function solution(A, K) {
  if (!A.length) return [];

  const length = A.length;
  const cycledNums = new Array(length);

  for (let i = 0; i < length; i++) {
    const newIndex = (i + K) % length;

    cycledNums[newIndex] = A[i];
  }

  return cycledNums;
}
