var groupAnagrams = function (strs) {
  let stringMap = {};
  let result = [];

  for (let i = 0; i < strs.length; i++) {
    let sortedString = strs[i].split("").sort().toString();
    if (stringMap[sortedString])
      stringMap[sortedString] = [...stringMap[sortedString], strs[i]];
    else {
      stringMap[sortedString] = [strs[i]];
    }
  }
  for (const key of Object.keys(stringMap)) {
    result = [...result, stringMap[key]];
  }
  return result;
};
