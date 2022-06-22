const isHappyNumber = (num) => {
  let slow = num;
  let fast = num;

  while (true) {
    slow = sumDigitSquares(slow);
    fast = sumDigitSquares(sumDigitSquares(fast));
    if (slow === fast) {
      break;
    }
  }

  return slow === 1;
};

const sumDigitSquares = (num) => {
  let sum = 0;
  while (num) {
    sum += (num % 10) ** 2;
    num = Math.floor(num / 10);
  }
  return sum;
};

console.log(`${isHappyNumber(23)}`);
console.log(`${isHappyNumber(12)}`);
