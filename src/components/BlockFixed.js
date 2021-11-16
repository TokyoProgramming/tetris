const blockTFixed = (board, rowPosition, colPosition, i = 0) => {
  board[rowPosition - 1][colPosition + i + 1] = 'blockTFixed';
  board[rowPosition][colPosition + i + 1] = 'blockTFixed';
  board[rowPosition][colPosition + i + 2] = 'blockTFixed';
  board[rowPosition][colPosition + i] = 'blockTFixed';
};

const blockZFixed = (board, rowPosition, colPosition, i = 0) => {
  board[rowPosition - 1][colPosition + i] = 'blockZFixed';
  board[rowPosition - 1][colPosition + i + 1] = 'blockZFixed';
  board[rowPosition][colPosition + i + 1] = 'blockZFixed';
  board[rowPosition][colPosition + i + 2] = 'blockZFixed';
};

const blockSFixed = (board, rowPosition, colPosition, i = 0) => {
  board[rowPosition - 1][colPosition + i + 2] = 'blockSFixed';
  board[rowPosition - 1][colPosition + i + 1] = 'blockSFixed';
  board[rowPosition][colPosition + i] = 'blockSFixed';
  board[rowPosition][colPosition + i + 1] = 'blockSFixed';
};

const blockLFixed = (board, rowPosition, colPosition, i = 0) => {
  board[rowPosition - 1][colPosition + i + 2] = 'blockLFixed';
  board[rowPosition][colPosition + i] = 'blockLFixed';
  board[rowPosition][colPosition + i + 1] = 'blockLFixed';
  board[rowPosition][colPosition + i + 2] = 'blockLFixed';
};

const blockJFixed = (board, rowPosition, colPosition, i = 0) => {
  board[rowPosition - 1][colPosition + i] = 'blockJFixed';
  board[rowPosition][colPosition + i] = 'blockJFixed';
  board[rowPosition][colPosition + i + 1] = 'blockJFixed';
  board[rowPosition][colPosition + i + 2] = 'blockJFixed';
};

const blockOFixed = (board, rowPosition, colPosition, i = 0) => {
  board[rowPosition - 1][colPosition + i] = 'blockOFixed';
  board[rowPosition - 1][colPosition + i + 1] = 'blockOFixed';
  board[rowPosition][colPosition + i] = 'blockOFixed';
  board[rowPosition][colPosition + i + 1] = 'blockOFixed';
};

const blockIFixed = (board, rowPosition, colPosition, i = 0) => {
  board[rowPosition][colPosition + i] = 'blockIFixed';
  board[rowPosition][colPosition + i + 1] = 'blockIFixed';
  board[rowPosition][colPosition + i + 2] = 'blockIFixed';
  board[rowPosition][colPosition + i + 3] = 'blockIFixed';
};

const blockFixedHandler = (b, blockName, row, col, i) => {
  switch (blockName) {
    case 'blockT':
      return blockTFixed(b, row, col, i);
    case 'blockZ':
      return blockZFixed(b, row, col, i);
    case 'blockS':
      return blockSFixed(b, row, col, i);
    case 'blockL':
      return blockLFixed(b, row, col, i);
    case 'blockJ':
      return blockJFixed(b, row, col, i);
    case 'blockO':
      return blockOFixed(b, row, col, i);
    case 'blockI':
      return blockIFixed(b, row, col, i);
    case 'block':
      return blockIFixed(b, row, col, i);

    default:
      return;
  }
};

export { blockFixedHandler };
