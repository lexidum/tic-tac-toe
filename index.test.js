const makeMove = require("./src/makeMove");
const createBoard = require("./src/createBoard");
const isWinner = require("./src/isWinner");

test("should create a board", () => {
  const board = createBoard();
  expect(board).toBeDefined();
  expect(board.length).toBe(3);
});

test("should place a move", () => {
  const board = createBoard();
  const result = makeMove(board, "A", 1, 1);
  expect(result[1][1]).toBe("A");
});

test("should not let another player place in an occupied cell", () => {
  let board = createBoard();
  board = makeMove(board, "A", 1, 1);
  const result = makeMove(board, "B", 1, 1);
  expect(result[1][1]).toBe("A");
});

test("should test if first column is winning", () => {
  let board = createBoard();
  board = makeMove(board, "A", 0, 0);
  board = makeMove(board, "B", 0, 2);
  board = makeMove(board, "A", 1, 0);
  board = makeMove(board, "B", 0, 1);
  board = makeMove(board, "A", 2, 0);
  const result = isWinner(board);
  expect(result).toBe("A");
});
