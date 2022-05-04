// Given a string with lowercase letters only, if you are allowed to replace no more than k letters with any letter,
// find the length of the longest substring having the same letters after replacement.

// --- Examples
// Input: String="aabccbb", k=2
// Output: 5
// Explanation: Replace the two 'c' with 'b' to have the longest repeating substring "bbbbb".
// Input: String="abbcb", k=1
// Output: 4
// Explanation: Replace the 'c' with 'b' to have the longest repeating substring "bbbb".
// Input: String="abccde", k=1
// Output: 3
// Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".

const length_of_longest_substring = function (str, k) {
  let windowStart = 0;
  let maxLength = 0;
  let maxRepeatLetterCount = 0;
  const charFrequency = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar]++;
    maxRepeatLetterCount = Math.max(
      maxRepeatLetterCount,
      charFrequency[rightChar]
    );

    if (windowEnd - windowStart + 1 - maxRepeatLetterCount > k) {
      const leftChar = str[windowStart];
      windowStart++;
      charFrequency[leftChar]--;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};
