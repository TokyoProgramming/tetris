const initialBoard = (board) => {
  board[11][3] = 'blockTFixed';
  board[11][4] = 'blockTFixed';
  board[11][5] = 'blockTFixed';
  board[10][4] = 'blockTFixed';

  board[9][5] = 'blockOFixed';
  board[9][6] = 'blockOFixed';
  board[8][5] = 'blockOFixed';
  board[8][6] = 'blockOFixed';

  board[7][5] = 'blockOFixed';
  board[7][6] = 'blockOFixed';
  board[6][5] = 'blockOFixed';
  board[6][6] = 'blockOFixed';
};

export { initialBoard };
