var topKFrequent = function (nums, k) {
  let frequencyMap = {};
  let frequencyArray = [];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    frequencyMap[nums[i]] = frequencyMap[nums[i]] + 1 || 1;
  }

  for (const value in frequencyMap) {
    frequencyArray.push([value, frequencyMap[value]]);
  }
  frequencyArray.sort((a, b) => b[1] - a[1]);

  for (let j = 0; j < k; j++) {
    result = [...result, frequencyArray[j][0]];
  }
  return result;
};
