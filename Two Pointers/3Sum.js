var threeSum = function (nums) {
  if (nums.length < 3) return [];

  let result = [];
  let sortedArray = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length; i++) {
    let left = i + 1;
    let right = sortedArray.length - 1;

    if (sortedArray[i] == sortedArray[i - 1]) continue;

    while (left < right) {
      if (sortedArray[i] + sortedArray[left] + sortedArray[right] == 0) {
        result.push([sortedArray[i], sortedArray[left], sortedArray[right]]);
        left++;
        while (sortedArray[left] == sortedArray[left - 1]) {
          left++;
        }
      } else if (sortedArray[i] + sortedArray[left] + sortedArray[right] > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
};
