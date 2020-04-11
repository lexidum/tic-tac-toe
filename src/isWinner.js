function isWinner(board) {
  let winner = false;
  // last column
  if (
    board[0][2] !== " " &&
    board[0][2] === board[1][2] &&
    board[0][2] === board[2][2]
  ) {
    winner = board[0][2];
  }
  // first column
  if (
    board[0][0] !== " " &&
    board[0][0] === board[1][0] &&
    board[0][0] === board[2][0]
  ) {
    winner = board[0][0];
  }
  // middle column
  if (
    board[0][1] !== " " &&
    board[0][1] === board[1][1] &&
    board[0][1] === board[2][1]
  ) {
    winner = board[0][1];
  }
  // first line
  if (
    board[0][0] !== " " &&
    board[0][0] === board[0][1] &&
    board[0][0] === board[0][2]
  ) {
    winner = board[0][0];
  }
  // second line
  if (
    board[1][0] !== " " &&
    board[1][0] === board[1][1] &&
    board[1][0] === board[1][2]
  ) {
    winner = board[1][0];
  }
  // third line
  if (
    board[2][0] !== " " &&
    board[2][0] === board[2][1] &&
    board[2][0] === board[2][2]
  ) {
    winner = board[2][0];
  }
  // first diagonal
  if (
    board[0][0] !== " " &&
    board[0][0] === board[1][1] &&
    board[0][0] === board[2][2]
  ) {
    winner = board[0][0];
  }
  // second diagonal
  if (
    board[0][2] !== " " &&
    board[0][2] === board[1][1] &&
    board[0][2] === board[2][0]
  ) {
    winner = board[0][2];
  }
  return winner;
}
module.exports = isWinner;
