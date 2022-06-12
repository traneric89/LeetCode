var minWindow = function (s, t) {
  if (s.length < t.length) return "";

  let tMap = {};
  let sMap = {};

  let left = 0;
  let resultLength = Infinity;
  let resultIndex = [0, 0];
  let resultArray = "";
  let numMatches = 0;

  for (let i = 0; i < t.length; i++) {
    tMap[t[i]] = tMap[t[i]] + 1 || 1;
  }

  for (let j = 0; j < s.length; j++) {
    sMap[s[j]] = sMap[s[j]] + 1 || 1;
    if (sMap[s[j]] === tMap[s[j]]) numMatches++;

    while (numMatches === Object.keys(tMap).length) {
      if (j - left + 1 < resultLength) {
        resultLength = j - left + 1;
        resultIndex = [left, j];
      }
      sMap[s[left]]--;
      if (sMap[s[left]] < tMap[s[left]]) numMatches--;
      left++;
    }
  }
  if (resultLength != Infinity) {
    for (let x = resultIndex[0]; x <= resultIndex[1]; x++) {
      resultArray += s[x];
    }
    return resultArray;
  } else {
    return "";
  }
};
