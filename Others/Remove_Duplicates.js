//could use Set
const removeDuplicate = (arr) => {
  let mySet = new Set(arr);
  return [...mySet];
};

// const removeDuplicate = (arr) => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) == i) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

console.log(removeDuplicate([1, 2, 2, 4, 5, 6, 6]));
