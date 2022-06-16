var intersection = function (nums) {
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    res = compare(res, nums[i]);
  }
  return res.sort((a, b) => a - b);
};

const compare = (a1, a2) => {
  let res = [];

  for (let i = 0; i < a2.length; i++) {
    if (a1.includes(a2[i])) {
      res.push(a2[i]);
    }
  }
  return res;
};
