function solution(A) {
  // find the sum of the array that's missing an element
  const actualSum = A.reduce((accumulator, a) => accumulator + a, 0);
  // initialize a new variable to keep track of sum
  // if no element was missing
  const maxValue = A.length + 1;
  const expectedSum = (maxValue * (maxValue + 1)) / 2;

  // return the difference as a missing element
  return expectedSum - actualSum;
}
