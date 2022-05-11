// Given a string and a list of words, find all the starting indices of substrings
// in the given string that are a concatenation of all the given words exactly once
// without any overlapping of words. It is given that all words are of the same length.
// --- Examples
// Input: String="catfoxcat", Words=["cat", "fox"]
// Output: [0, 3]
// Explanation: The two substring containing both the words are "catfox" & "foxcat".
// Input: String="catcatfoxfox", Words=["cat", "fox"]
// Output: [3]
// Explanation: The only substring containing both the words is "catfox".

const find_word_concatenation = function (str, words) {
  if (words.length === 0 || words[0].length === 0) return [];
  const wordFrequency = {};
  const wordLength = words[0].length;
  const wordsCount = words.length;
  const resultsIndices = [];

  for (const word of words) {
    if (!(word in wordFrequency)) {
      wordFrequency[word] = 0;
    }
    wordFrequency[word]++;
  }

  for (
    let windowStart = 0;
    windowStart < str.length - wordsCount * wordLength + 1;
    windowStart++
  ) {
    const wordsSeen = {};
    for (
      let currentWordCount = 0;
      currentWordCount < wordsCount;
      currentWordCount++
    ) {
      // calculate the starting index by multiplying word count by word length
      const wordStartIndex = windowStart + currentWordCount * wordLength;
      // get the next word from the string
      const word = str.substring(wordStartIndex, wordStartIndex + wordLength);
      // if the word is not in the frequency map, break the inner loop
      if (!(word in wordFrequency)) {
        break;
      }

      // else, increment the word frequency in the wordsSeen object
      if (!(word in wordsSeen)) {
        wordsSeen[word] = 0;
      }
      wordsSeen[word]++;

      // if the word frequency is higher than required or none, break the inner loop
      if (wordsSeen[word] > (wordFrequency[word] || 0)) {
        break;
      }

      // store the starting index if all the words are found
      if (currentWordCount + 1 === wordsCount) {
        resultsIndices.push(windowStart);
      }
    }
  }

  return resultsIndices;
};
