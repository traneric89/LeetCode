var isValidSudoku = function (board) {
  const validSet = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == ".") continue;
      if (
        validSet.has(`row-${i}-has-${board[i][j]}`) ||
        validSet.has(`col-${j}-has-${board[i][j]}`) ||
        validSet.has(
          `grid-${Math.floor(i / 3)}-col${Math.floor(j / 3)}-has-${board[i][j]}`
        )
      ) {
        return false;
      } else {
        validSet.add(`row-${i}-has-${board[i][j]}`);
        validSet.add(`col-${j}-has-${board[i][j]}`);
        validSet.add(
          `grid-${Math.floor(i / 3)}-col${Math.floor(j / 3)}-has-${board[i][j]}`
        );
      }
    }
  }
  return true;
};
