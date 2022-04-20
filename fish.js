// ASSUMPTIONS
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [0..1,000,000,000];
// each element of array B is an integer that can have one of the following values: 0, 1;
// the elements of A are all distinct.

function solution(A, B) {
  if (A.length === 1) return 1;

  let survivors = 0;
  const stack = [];

  for (let i = 0; i < A.length; i++) {
    const weight = A[i];
    if (B[i] === 1) {
      stack.push(weight);
    } else {
      let weightDown = stack.length === 0 ? null : stack.pop();
      while (weightDown && weightDown < weight) {
        weightDown = stack.length === 0 ? null : stack.pop();
      }

      if (!weightDown) {
        survivors++;
      } else {
        stack.push(weightDown);
      }
    }
  }

  survivors += stack.length;
  return survivors;
}
