var characterReplacement = function (s, k) {
  let letterMap = {};

  let l = 0;
  let result = 0;

  for (let r = 0; r < s.length; r++) {
    letterMap[s[r]] = letterMap[s[r]] + 1 || 1;

    let letterArray = Object.values(letterMap);
    let charMost = Math.max(...letterArray);

    if (r - l + 1 - charMost > k) {
      letterMap[s[l]]--;
      l++;
    }
    result = Math.max(result, r - l + 1);
  }
  return result;
};
