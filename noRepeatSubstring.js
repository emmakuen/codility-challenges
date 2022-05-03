// Given a string, find the length of the longest substring, which has all distinct characters.

// --- Examples
// Input: String="aabccbb"
// Output: 3
// Explanation: The longest substring with distinct characters is "abc".
// Input: String="abbbb"
// Output: 2
// Explanation: The longest substring with distinct characters is "ab".
// Input: String="abccde"
// Output: 3
// Explanation: Longest substrings with distinct characters are "abc" & "cde".

const non_repeat_substring = function (str) {
  const distinctChars = {};
  let windowStart = 0;
  let maxLength = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    if (rightChar in distinctChars) {
      windowStart = Math.max(windowStart, distinctChars[rightChar] + 1);
    }
    distinctChars[rightChar] = windowEnd;
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};
