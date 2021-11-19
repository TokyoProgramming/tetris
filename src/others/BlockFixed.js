const blockTFixed = (board, rowPosition, colPosition, i = 0, shape) => {
  if (shape === 1) {
    board[rowPosition - 1][colPosition + i + 1] = 'blockTFixed';
    board[rowPosition][colPosition + i + 1] = 'blockTFixed';
    board[rowPosition][colPosition + i + 2] = 'blockTFixed';
    board[rowPosition][colPosition + i] = 'blockTFixed';
  } else {
    board[rowPosition - 2][colPosition + i + 1] = 'blockTFixed';
    board[rowPosition - 1][colPosition + i + 1] = 'blockTFixed';
    board[rowPosition - 1][colPosition + i + 2] = 'blockTFixed';
    board[rowPosition][colPosition + i + 1] = 'blockTFixed';
  }
};

const blockZFixed = (board, rowPosition, colPosition, i = 0, shape) => {
  board[rowPosition - 1][colPosition + i] = 'blockZFixed';
  board[rowPosition - 1][colPosition + i + 1] = 'blockZFixed';
  board[rowPosition][colPosition + i + 1] = 'blockZFixed';
  board[rowPosition][colPosition + i + 2] = 'blockZFixed';
};

const blockSFixed = (board, rowPosition, colPosition, i = 0, shape) => {
  board[rowPosition - 1][colPosition + i + 2] = 'blockSFixed';
  board[rowPosition - 1][colPosition + i + 1] = 'blockSFixed';
  board[rowPosition][colPosition + i] = 'blockSFixed';
  board[rowPosition][colPosition + i + 1] = 'blockSFixed';
};

const blockLFixed = (board, rowPosition, colPosition, i = 0, shape) => {
  board[rowPosition - 1][colPosition + i + 2] = 'blockLFixed';
  board[rowPosition][colPosition + i] = 'blockLFixed';
  board[rowPosition][colPosition + i + 1] = 'blockLFixed';
  board[rowPosition][colPosition + i + 2] = 'blockLFixed';
};

const blockJFixed = (board, rowPosition, colPosition, i = 0, shape) => {
  board[rowPosition - 1][colPosition + i] = 'blockJFixed';
  board[rowPosition][colPosition + i] = 'blockJFixed';
  board[rowPosition][colPosition + i + 1] = 'blockJFixed';
  board[rowPosition][colPosition + i + 2] = 'blockJFixed';
};

const blockOFixed = (board, rowPosition, colPosition, i = 0, shape) => {
  board[rowPosition - 1][colPosition + i] = 'blockOFixed';
  board[rowPosition - 1][colPosition + i + 1] = 'blockOFixed';
  board[rowPosition][colPosition + i] = 'blockOFixed';
  board[rowPosition][colPosition + i + 1] = 'blockOFixed';
};

const blockIFixed = (board, rowPosition, colPosition, i = 0, shape) => {
  board[rowPosition][colPosition + i] = 'blockIFixed';
  board[rowPosition][colPosition + i + 1] = 'blockIFixed';
  board[rowPosition][colPosition + i + 2] = 'blockIFixed';
  board[rowPosition][colPosition + i + 3] = 'blockIFixed';
};

const blockFixedHandler = (b, blockName, row, col, i, shape) => {
  switch (blockName) {
    case 'blockT':
      return blockTFixed(b, row, col, i, shape);
    case 'blockZ':
      return blockZFixed(b, row, col, i, shape);
    case 'blockS':
      return blockSFixed(b, row, col, i, shape);
    case 'blockL':
      return blockLFixed(b, row, col, i, shape);
    case 'blockJ':
      return blockJFixed(b, row, col, i, shape);
    case 'blockO':
      return blockOFixed(b, row, col, i, shape);
    case 'blockI':
      return blockIFixed(b, row, col, i, shape);
    case 'block':
      return blockIFixed(b, row, col, i, shape);

    default:
      return;
  }
};

export { blockFixedHandler };
