const arrCheck = (board, arr, blockName) => {
  const targetCells = arr.map((val) => board[val.row + 1][val.col]);
  const check = targetCells.every((el) => el === 0);
  if (check) {
    arr.forEach((val) => (board[val.row][val.col] = blockName));
    return true;
  } else {
    arr.map((val) => (board[val.row][val.col] = blockName + 'Fixed'));
    return false;
  }
};

const blockT = (board, blockName, rowPosition, colPosition, i = 0) => {
  const arr = [
    {
      row: rowPosition - 1,
      col: colPosition + i + 1,
    },
    {
      row: rowPosition,
      col: colPosition + i + 1,
    },
    {
      row: rowPosition,
      col: colPosition + i + 2,
    },
    {
      row: rowPosition,
      col: colPosition + i,
    },
  ];
  let res = arrCheck(board, arr, blockName);
  return res;
};

const blockZ = (board, blockName, rowPosition, colPosition, i = 0) => {
  const arr = [
    {
      row: rowPosition - 1,
      col: colPosition + i,
    },
    {
      row: rowPosition - 1,
      col: colPosition + i + 1,
    },
    {
      row: rowPosition,
      col: colPosition + i + 1,
    },
    {
      row: rowPosition,
      col: colPosition + i + 2,
    },
  ];
  let res = arrCheck(board, arr, blockName);
  return res;
};

const blockS = (board, blockName, rowPosition, colPosition, i = 0) => {
  const arr = [
    {
      row: rowPosition - 1,
      col: colPosition + i + 2,
    },
    {
      row: rowPosition - 1,
      col: colPosition + i + 1,
    },
    {
      row: rowPosition,
      col: colPosition + i,
    },
    {
      row: rowPosition,
      col: colPosition + i + 1,
    },
  ];
  let res = arrCheck(board, arr, blockName);
  return res;
};

const blockL = (board, blockName, rowPosition, colPosition, i = 0) => {
  const arr = [
    {
      row: rowPosition - 1,
      col: colPosition + i + 2,
    },
    {
      row: rowPosition,
      col: colPosition + i,
    },
    {
      row: rowPosition,
      col: colPosition + i + 1,
    },
    {
      row: rowPosition,
      col: colPosition + i + 2,
    },
  ];

  let res = arrCheck(board, arr, blockName);
  return res;
};

const blockJ = (board, blockName, rowPosition, colPosition, i = 0) => {
  const arr = [
    {
      row: rowPosition - 1,
      col: colPosition + i,
    },
    {
      row: rowPosition,
      col: colPosition + i,
    },
    {
      row: rowPosition,
      col: colPosition + i + 1,
    },
    {
      row: rowPosition,
      col: colPosition + i + 2,
    },
  ];
  let res = arrCheck(board, arr, blockName);
  return res;
};

const blockO = (board, blockName, rowPosition, colPosition, i = 0) => {
  const arr = [
    {
      row: rowPosition - 1,
      col: colPosition + i,
    },
    {
      row: rowPosition - 1,
      col: colPosition + i + 1,
    },
    {
      row: rowPosition,
      col: colPosition + i,
    },
    {
      row: rowPosition,
      col: colPosition + i + 1,
    },
  ];
  let res = arrCheck(board, arr, blockName);
  return res;
};

const blockI = (board, blockName, rowPosition, colPosition, i = 0) => {
  const arr = [
    {
      row: rowPosition,
      col: colPosition + i,
    },
    {
      row: rowPosition,
      col: colPosition + i + 1,
    },
    {
      row: rowPosition,
      col: colPosition + i + 2,
    },
    {
      row: rowPosition,
      col: colPosition + i + 3,
    },
  ];

  let res = arrCheck(board, arr, blockName);
  return res;
};

const chooseTargetBlock = (b, blockName, l, m, n) => {
  switch (blockName) {
    case 'blockT':
      return blockT(b, blockName, l, m, n);
    case 'blockZ':
      return blockZ(b, blockName, l, m, n);
    case 'blockS':
      return blockS(b, blockName, l, m, n);
    case 'blockL':
      return blockL(b, blockName, l, m, n);
    case 'blockJ':
      return blockJ(b, blockName, l, m, n);
    case 'blockO':
      return blockO(b, blockName, l, m, n);
    case 'blockI':
      return blockI(b, blockName, l, m, n);
    default:
      return;
  }
};

export { chooseTargetBlock };
