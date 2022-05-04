var twoSum = function (nums, target) {
  let targetMap = {};
  for (let i = 0; i < nums.length; i++) {
    let pair = target - nums[i];
    if (targetMap[pair] >= 0) {
      return [targetMap[pair], i];
    } else {
      targetMap[nums[i]] = i;
    }
  }
};
