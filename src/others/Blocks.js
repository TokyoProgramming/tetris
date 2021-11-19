const blockTRotate = (rowPosition, colPosition, i, shape) => {
  const arr = [
    {
      row: rowPosition - 2,
      col: colPosition + i + 1,
    },
    {
      row: rowPosition - 1,
      col: colPosition + i + 1,
    },
    {
      row: rowPosition - 1,
      col: colPosition + i + 2,
    },
    {
      row: rowPosition,
      col: colPosition + i + 1,
    },
  ];
  return arr;
};

const rotateBlockHandler = (
  board,
  blockName,
  rowPosition,
  colPosition,
  i,
  shape
) => {
  switch (blockName) {
    case 'blockT':
      return blockTRotate(rowPosition, colPosition, i, shape);
    case 'blockZ':
    case 'blockS':
    case 'blockL':
    case 'blockJ':
    case 'blockO':
    case 'blockI':
      if (rowPosition < 8) {
        console.log('less than 8');
        console.log(shape);
      } else {
        console.log('more than 8');
        console.log(shape);
      }
      return;

    default:
      return;
  }
};
const arrCheck = (
  board,
  arr,
  blockName,
  direction,
  rowPosition,
  colPosition,
  i,
  shape
) => {
  let m = 0;
  let n = 0;
  let targetArr;
  if (direction === 'update') {
    m = 1;
    n = 0;
    targetArr = arr;
  } else if (direction === 'left') {
    n = 0;
    targetArr = arr;
  } else if (direction === 'right') {
    n = 1;
    targetArr = arr;
  } else if (direction === 'rotate') {
    targetArr = rotateBlockHandler(
      board,
      blockName,
      rowPosition,
      colPosition,
      i,
      shape
    );
  }

  const targetCells = targetArr.map((val) => board[val.row + m][val.col + n]);
  const check = targetCells.every((el) => el === 0);

  if (check && direction === 'rotate') {
    targetArr.map((val) => (board[val.row][val.col] = blockName));
    return 1;
  } else if (!check && direction === 'update') {
    targetArr.map((val) => (board[val.row][val.col] = blockName + 'Fixed'));
    return 1;
  } else if (
    (!check && direction === 'left') ||
    (!check && direction === 'right')
  ) {
    return 2;
  } else if (check) {
    targetArr.map((val) => (board[val.row][val.col] = blockName));

    return 0;
  }
};

const blockT = (
  board,
  blockName,
  rowPosition,
  colPosition,
  i = 0,
  direction,
  shape
) => {
  let arr;
  if (shape === 1) {
    arr = [
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
  } else {
    arr = blockTRotate(rowPosition, colPosition, i, shape);
  }
  let res = arrCheck(
    board,
    arr,
    blockName,
    direction,
    rowPosition,
    colPosition,
    i,
    shape
  );
  return res;
};

const blockZ = (
  board,
  blockName,
  rowPosition,
  colPosition,
  i = 0,
  direction,
  shape
) => {
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
  let res = arrCheck(
    board,
    arr,
    blockName,
    direction,
    rowPosition,
    colPosition,
    i,
    shape
  );

  return res;
};

const blockS = (
  board,
  blockName,
  rowPosition,
  colPosition,
  i = 0,
  direction,
  shape
) => {
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
  let res = arrCheck(
    board,
    arr,
    blockName,
    direction,
    rowPosition,
    colPosition,
    i,
    shape
  );

  return res;
};

const blockL = (
  board,
  blockName,
  rowPosition,
  colPosition,
  i = 0,
  direction,
  shape
) => {
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

  let res = arrCheck(
    board,
    arr,
    blockName,
    direction,
    rowPosition,
    colPosition,
    i,
    shape
  );

  return res;
};

const blockJ = (
  board,
  blockName,
  rowPosition,
  colPosition,
  i = 0,
  direction,
  shape
) => {
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
  let res = arrCheck(
    board,
    arr,
    blockName,
    direction,
    rowPosition,
    colPosition,
    i,
    shape
  );

  return res;
};

const blockO = (
  board,
  blockName,
  rowPosition,
  colPosition,
  i = 1,
  direction,
  shape
) => {
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
  let res = arrCheck(
    board,
    arr,
    blockName,
    direction,
    rowPosition,
    colPosition,
    i,
    shape
  );

  return res;
};

const blockI = (
  board,
  blockName,
  rowPosition,
  colPosition,
  i = 0,
  direction,
  shape
) => {
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
  let res = arrCheck(
    board,
    arr,
    blockName,
    direction,
    rowPosition,
    colPosition,
    i,
    shape
  );

  return res;
};

const chooseTargetBlock = (b, blockName, l, m, n, direction, shape) => {
  switch (blockName) {
    case 'blockT':
      return blockT(b, blockName, l, m, n, direction, shape);
    case 'blockZ':
      return blockZ(b, blockName, l, m, n, direction, shape);
    case 'blockS':
      return blockS(b, blockName, l, m, n, direction, shape);
    case 'blockL':
      return blockL(b, blockName, l, m, n, direction, shape);
    case 'blockJ':
      return blockJ(b, blockName, l, m, n, direction, shape);
    case 'blockO':
      return blockO(b, blockName, l, m, n, direction, shape);
    case 'blockI':
      return blockI(b, blockName, l, m, n, direction, shape);
    default:
      return;
  }
};

export { chooseTargetBlock };
