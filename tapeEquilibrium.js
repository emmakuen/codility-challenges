function solution(A) {
  const sum = A.reduce((accumulator, num) => accumulator + num, 0);
  let firstSum = A[0];
  let secondSum = sum - firstSum;
  let minDifference = Math.abs(firstSum - secondSum);

  for (let i = 1; i < A.length - 1; i++) {
    const num = A[i];
    firstSum += num;
    secondSum -= num;
    minDifference = Math.min(minDifference, Math.abs(firstSum - secondSum));
  }

  return minDifference;
}
