// return 1 if properly nested
// return 0 otherwise

// assumptions
// N is an integer within the range [0..200,000];
// string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".

function solution(S) {
  if (S.length === 0) return 1;

  const bracketPairs = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  const stack = [];

  for (const char of S) {
    if (char in bracketPairs) {
      stack.push(bracketPairs[char]);
    } else if (char === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return 0;
    }
  }

  return stack.length === 0 ? 1 : 0;
}
