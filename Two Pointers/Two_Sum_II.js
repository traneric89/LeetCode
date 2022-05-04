var twoSum = function (numbers, target) {
  let pointer1 = 0;
  let pointer2 = numbers.length - 1;

  while (pointer1 < pointer2) {
    if (numbers[pointer1] + numbers[pointer2] == target)
      return [pointer1 + 1, pointer2 + 1];
    else if (numbers[pointer1] + numbers[pointer2] < target) {
      pointer1++;
    } else {
      pointer2--;
    }
  }
};
