// Given a string and a pattern, find all anagrams of the pattern in the given string.
// --- Examples
// Input: String="ppqp", Pattern="pq"
// Output: [1, 2]
// Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".
// Input: String="abbcabc", Pattern="abc"
// Output: [2, 3, 4]
// Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".

const find_string_anagrams = function (str, pattern) {
  const anagramIndexes = [];
  const charFrequency = {};
  let windowStart = 0;
  let matched = 0;

  for (let i = 0; i < pattern.length; i++) {
    const currentChar = pattern[i];
    if (!(currentChar in charFrequency)) {
      charFrequency[currentChar] = 0;
    }
    charFrequency[currentChar]++;
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const currentChar = str[windowEnd];
    if (currentChar in charFrequency) {
      charFrequency[currentChar]--;
      if (charFrequency[currentChar] === 0) {
        matched++;
        if (matched === Object.keys(charFrequency).length) {
          anagramIndexes.push(windowStart);
        }
      }
    }

    if (windowEnd >= pattern.length - 1) {
      const leftChar = str[windowStart];
      windowStart++;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched--;
        }
        charFrequency[leftChar]++;
      }
    }
  }

  return anagramIndexes;
};
