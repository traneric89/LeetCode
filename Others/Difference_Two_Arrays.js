var findDifference = function (nums1, nums2) {
  let notInTwo = [];
  let notInOne = [];
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    if (!nums2.includes(nums1[i]) && !notInTwo.includes(nums1[i])) {
      notInTwo.push(nums1[i]);
    }
  }

  result.push(notInTwo);

  for (let i = 0; i < nums2.length; i++) {
    if (!nums1.includes(nums2[i]) && !notInOne.includes(nums2[i])) {
      notInOne.push(nums2[i]);
    }
  }
  result.push(notInOne);

  return result;
};
