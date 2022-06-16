const removeToFall = (board) => {
  let colsToCheck = [];
  let count = 0;

  for (let i = 0; i < board[0].length; i++) {
    if (board[0][i] == "*") colsToCheck.push(1);
    else {
      colsToCheck.push(0);
    }
  }

  for (let i = 1; i < board.length; i++) {
    for (let j = 0; j < board[1].length; j++) {
      if (board[i][j] == "#" && colsToCheck[j] == 1) count++;
    }
  }
  return count;
};

console.log(
  removeToFall([
    [".", ".", "*", "*"],
    ["#", "*", ".", "*"],
    [".", ".", "#", "."],
    [".", "#", ".", "#"],
  ])
);
