var intersection = function (nums1, nums2) {
  let mySet = new Set();

  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      mySet.add(nums1[i]);
    }
  }
  return [...mySet];
};
