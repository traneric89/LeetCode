const minmax = (arr) => {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    min = Math.min(min, arr[i]);
  }
  return `min = ${min}, max = ${max}`;
};

console.log(minmax([1, 345, 234, 21, 10000, 56789]));
