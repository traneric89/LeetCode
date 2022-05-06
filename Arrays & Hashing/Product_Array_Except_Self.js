var productExceptSelf = function (nums) {
  let result = [];
  let postfix;

  for (let i = 0; i < nums.length; i++) {
    if (i == 0) result[i] = 1;
    else {
      result[i] = nums[i - 1] * result[i - 1];
    }
  }
  for (let j = nums.length - 1; j >= 0; j--) {
    if (j == nums.length - 1) {
      result[j] = result[j];
      postfix = nums[j];
    } else {
      result[j] = result[j] * postfix;
      postfix = postfix * nums[j];
    }
  }
  return result;
};
