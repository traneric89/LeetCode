// Write a function that finds the longest run of the same character in a string/array of characters.
// A run is a consecutive sequence of the same character.

// Example,
// LengthOfLongestRun(“AABCA”) The longest run is 2 since “AA“ is a consecutive run. The last A in the string is a different run.

// Example,
// LengthOfLongestRun("abbcccddddcccbba") The longest run is 4 since “dddd“ is the longest consecutive run. There are 2 runs of “ccc” but they are independent runs of 3.

const test1 = (input) => {
  let currentResult = 1;
  let maxResult = 0;
  for (let i = 1; i < input.length; i++) {
    if (input[i] === input[i - 1]) {
      currentResult++;
      maxResult = Math.max(maxResult, currentResult);
    } else {
      currentResult = 1;
    }
  }
  return maxResult;
};

// Write a function that finds the zero-based index of the longest run in a string.
// A run is a consecutive sequence of the same character.
// If there is more than one run with the same length, return the index of the first one.

// For example, IndexOfLongestRun("abbcccddddcccbbbbba") should return 6 as the longest run

// is dddd and it first appears on index 6.

const test2 = (input) => {
  let currentResultIndex = 0;
  let currentResult = 1;
  let maxResult = 0;
  for (let i = 1; i < input.length; i++) {
    if (input[i] === input[i - 1]) {
      currentResult++;
      if (currentResult > maxResult) {
        maxResult = currentResult;
        currentResultIndex = i - maxResult + 1;
      }
    } else {
      currentResult = 1;
    }
  }
  return currentResultIndex;
};

test2("abbcccddddcccbbbbba");
