const isWinner = require("./isWinner");
const showBoard = require("./showBoard");
function makeMove(board, player, x, y) {
  if (board[x][y] !== " ") {
    console.log("Illegal move!");
    return board;
  }
  board[x][y] = player;
  const winner = isWinner(board);
  showBoard(board);
  if (winner) {
    console.log(`Player ${winner} has won!`);
  }

  return board;
}
module.exports = makeMove;
