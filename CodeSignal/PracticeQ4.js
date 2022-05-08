//Practice Code Signal Q4
//Largest contiguous subarray in A of elements in B but not in C
// 05/08/2022

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function solution(a, b, c) {
  let count = 0;
  let listArrays = {};
  let resultArray = [];
  let tempArray = [];

  for (let i = 0; i < a.length; i++) {
    if (inB(a[i], b) && !inC(a[i], c)) {
      tempArray.push(a[i]);
      listArrays[count] = tempArray;
    } else {
      count++;
      tempArray = [];
    }
  }

  console.log(listArrays);

  for (const key of Object.keys(listArrays)) {
    resultArray.push([key, listArrays[key]]);
  }
  console.log(resultArray);

  resultArray.sort((a, b) => b[1].length - a[1].length);

  console.log(resultArray);
  if (resultArray.length > 0) {
    return resultArray[0][1];
  } else {
    return [];
  }
}

const inB = (num, arrayB) => {
  for (let i = 0; i < arrayB.length; i++) {
    if (num == arrayB[i]) return true;
  }
  return false;
};

const inC = (num, arrayC) => {
  for (let i = 0; i < arrayC.length; i++) {
    if (num == arrayC[i]) return true;
  }
  return false;
};

solution([2, 3, 1, 3, 5], [2, 1, 4, 4, 1], [1, 2]);

solution([2, 1, 7, 1, 1, 5, 3, 5, 2, 1, 1, 1], [1, 3, 5], [2, 3]);
