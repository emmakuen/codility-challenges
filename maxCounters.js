// Assumptions:
// N and M are integers within the range [1..100,000];
// each element of array A is an integer within the range [1..N + 1].

function solution(N, A) {
  const counters = new Array(N).fill(0);
  let maxCounter = 0;
  let startLine = 0;

  for (let i = 0; i < A.length; i++) {
    const counterIndex = A[i] - 1;
    if (counterIndex > N - 1) {
      startLine = maxCounter;
    } else {
      counters[counterIndex] < startLine
        ? (counters[counterIndex] = startLine + 1)
        : (counters[counterIndex] += 1);
      maxCounter = Math.max(maxCounter, counters[counterIndex]);
    }
  }

  for (let i = 0; i < counters.length; i++) {
    counters[i] = Math.max(counters[i], startLine);
  }

  return counters;
}
