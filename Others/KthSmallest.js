const kSmallest = (arr, k) => {
  let obj = {};
  let count = 1;

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] + 1 || 1;
  }
  for (const key in obj) {
    if (count == k) {
      return key;
    }
    count++;
  }
};

//[1,2,5,6,9,3]
console.log(kSmallest([1, 2, 5, 6, 9, 3, 100], 8));
