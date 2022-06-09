var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  let firstString = {};
  let secondString = {};

  let left = 0;
  let right = s1.length - 1;
  let matchesTracker;

  for (let i = 0; i < s1.length; i++) {
    firstString[s1[i]] = firstString[s1[i]] + 1 || 1;
  }

  for (let j = 0; j < s1.length; j++) {
    secondString[s2[j]] = secondString[s2[j]] + 1 || 1;
  }

  while (right <= s2.length - 1) {
    matchesTracker = 0;
    for (let j = left; j <= right; j++) {
      if (secondString[s2[j]] == firstString[s2[j]]) {
        matchesTracker++;
      }
    }
    if (matchesTracker == s1.length) return true;

    secondString[s2[left]]--;
    left++;
    right++;
    secondString[s2[right]] = secondString[s2[right]] + 1 || 1;
  }
  return false;
};
