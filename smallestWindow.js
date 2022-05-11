// Given a string and a pattern, find the smallest substring in the given string
// which has all the character occurrences of the given pattern.
// --- Examples
// Input: String="aabdec", Pattern="abc"
// Output: "abdec"
// Explanation: The smallest substring having all characters of the pattern is "abdec"
// Input: String="aabdec", Pattern="abac"
// Output: "aabdec"
// Explanation: The smallest substring having all character occurrences of the pattern is "aabdec"
// Input: String="abdbca", Pattern="abc"
// Output: "bca"
// Explanation: The smallest substring having all characters of the pattern is "bca".
// Input: String="adcad", Pattern="abc"
// Output: ""
// Explanation: No substring in the given string has all characters of the pattern.

const find_substring = function (s, t) {
  let windowStart = 0;
  const charFrequency = {};
  let matched = 0;
  let smallestSubstring = "";

  for (const char of t) {
    if (!(char in charFrequency)) {
      charFrequency[char] = 0;
    }
    charFrequency[char]++;
  }

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];
    if (rightChar in charFrequency) {
      charFrequency[rightChar]--;
      if (charFrequency[rightChar] === 0) {
        matched++;
        while (matched === Object.keys(charFrequency).length) {
          const currentSubstring = s.slice(windowStart, windowEnd + 1);
          if (
            smallestSubstring === "" ||
            smallestSubstring.length > windowEnd - windowStart + 1
          ) {
            smallestSubstring = currentSubstring;
          }
          const leftChar = s[windowStart];
          windowStart++;
          if (leftChar in charFrequency) {
            if (charFrequency[leftChar] === 0) {
              matched--;
            }
            charFrequency[leftChar]++;
          }
        }
      }
    }
  }

  return smallestSubstring;
};
