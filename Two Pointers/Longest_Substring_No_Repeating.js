var lengthOfLongestSubstring = function (s) {
  let checkSet = new Set();
  let l = 0;
  let result = 0;

  for (let r = 0; r < s.length; r++) {
    while (checkSet.has(s[r])) {
      checkSet.delete(s[l]);
      l++;
    }
    checkSet.add(s[r]);
    result = Math.max(result, r - l + 1);
  }
  return result;
};
