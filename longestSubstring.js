// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// --- Examples
// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".
// Input: String="araaci", K=1
// Output: 2
// Explanation: The longest substring with no more than '1' distinct characters is "aa".
// Input: String="cbbebi", K=3
// Output: 5
// Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
// Input: String="cbbebi", K=10
// Output: 6
// Explanation: The longest substring with no more than '10' distinct characters is "cbbebi".

const longest_substring_with_k_distinct = function (str, k) {
  const charFrequency = {};
  let maxLength = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!Object.keys(charFrequency).includes(rightChar)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar]++;

    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar]--;
      windowStart++;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
    }
    maxLength = Math.max(windowEnd - windowStart + 1, maxLength);
  }

  return maxLength;
};
