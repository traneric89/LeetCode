//s1 = "1.4.2.5"
//s2 = "1.3.12.5" so comparing each number s1 is bigger

const largestChapter = (s1, s2) => {
  let splitS1 = s1.split(".");
  let splitS2 = s2.split(".");

  for (let i = 0; i < Math.min(splitS1.length, splitS2.length); i++) {
    if (parseInt(splitS1[i]) > parseInt(splitS2[i])) {
      return 1;
    } else if (parseInt(splitS2[i]) > parseInt(splitS1[i])) {
      return -1;
    }
  }
  if (splitS1.length > splitS2.length) {
    return 1;
  } else if (splitS2.length > splitS1.length) {
    return -1;
  } else {
    return 0;
  }
};

console.log(largestChapter("1.3.24.5", "1.3"));
