// Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.
// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.
// --- Examples
// Input: str1="xy#z", str2="xzz#"
// Output: true
// Explanation: After applying backspaces the strings become "xz" and "xz" respectively.
// Input: str1="xy#z", str2="xyz#"
// Output: false
// Explanation: After applying backspaces the strings become "xz" and "xy" respectively.
// Input: str1="xp#", str2="xyz##"
// Output: true
// Explanation: After applying backspaces the strings become "x" and "x" respectively.
// In "xyz##", the first '#' removes the character 'z' and the second '#' removes the character 'y'.
// Input: str1="xywrrmp", str2="xywrrmu#p"
// Output: true
// Explanation: After applying backspaces the strings become "xywrrmp" and "xywrrmp" respectively.

const backspaceCompare = (str1, str2) => {
  let pointer1 = str1.length - 1;
  let pointer2 = str2.length - 1;

  while (pointer1 >= 0 || pointer2 >= 0) {
    pointer1 = getNextRegularCharIndex(str1, pointer1);
    pointer2 = getNextRegularCharIndex(str2, pointer2);
    if (pointer1 < 0 && pointer2 < 0) return true;
    if (pointer1 < 0 || pointer2 < 0) return false;
    if (str1[pointer1] !== str2[pointer2]) return false;

    pointer1--;
    pointer2--;
  }

  return true;
};

function getNextRegularCharIndex(str, index) {
  const backspace = "#";
  let backspaceCount = 0;
  while (index >= 0) {
    // if the current char is a backspace, add it to the count
    if (str[index] === backspace) backspaceCount++;
    // if it's a regular character, remove it using a backspace and decrement the backspace count
    else if (backspaceCount > 0) backspaceCount--;
    // if it's a regular character and there's no backspace left, stop the loop
    // and we've found the index of the next regular char
    else break;

    // move on to the next character
    index--;
  }
  // return the next regular char index
  return index;
}
