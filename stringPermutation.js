// Given a string and a pattern, find out if the string contains any permutation of the pattern.
// --- Examples
// Input: String="oidbcaf", Pattern="abc"
// Output: true
// Explanation: The string contains "bca" which is a permutation of the given pattern.
// Input: String="odicf", Pattern="dc"
// Output: false
// Explanation: No permutation of the pattern is present in the given string as a substring.
// Input: String="bcdxabcdy", Pattern="bcdyabcdx"
// Output: true
// Explanation: Both the string and the pattern are a permutation of each other.
// Input: String="aaacb", Pattern="abc"
// Output: true
// Explanation: The string contains "acb" which is a permutation of the given pattern.

const find_permutation = function (str, pattern) {
  let windowStart = 0;
  const charFrequency = {};
  let matched = 0;

  // save the frequency of each character in charFrequency object
  for (let i = 0; i < pattern.length; i++) {
    const currentChar = pattern[i];
    if (!(currentChar in charFrequency)) {
      charFrequency[currentChar] = 0;
    }
    charFrequency[currentChar]++;
  }

  // for each character of the string
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    // check if the character is included in the pattern
    // if it does, decrement the frequency count by one
    if (rightChar in charFrequency) {
      charFrequency[rightChar]--;
      // if the frequency reaches zero, increment the matched character count by one
      if (charFrequency[rightChar] === 0) {
        matched++;
      }
    }

    // if all the characters of the pattern is matched, return true
    if (matched === Object.keys(charFrequency).length) {
      return true;
    }

    // else, slide the window to keep its length equal to the pattern length
    // if the end of window is greater than or equal to pattern length - 1
    // check if the character at the window start is in the pattern
    // if so, decrement the matched count by one if the frequency count equals zero
    // also, increment the frequency count by one
    // finally, slide the window start to the right
    if (windowEnd >= pattern.length - 1) {
      leftChar = str[windowStart];
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched--;
        }
        charFrequency[leftChar]++;
      }
      windowStart++;
    }
  }

  // if all characters didn't match, return false
  return false;
};
