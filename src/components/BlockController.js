import { chooseTargetBlock } from './BlockShapes';

const blockController = (
  board,
  blockName,
  row,
  col,
  i,
  direction,
  shape,
  status = 'move'
) => {
  if (status !== 'fixed') {
    let m = 0;
    let n = 0;
    let targetArr = chooseTargetBlock(blockName, row, col, i, shape);

    if (direction === 'update') {
      m = 1;
      n = 0;
    } else if (direction === 'left') {
      n = 0;
    } else if (direction === 'right') {
      n = 0;
    } else if (direction === 'rotate') {
      targetArr = chooseTargetBlock(blockName, row, col, i, shape + 1);
    } else if (direction === 'down') {
      n = 0;
      m = 1;
    }

    const targetCells = targetArr.map((val) => board[val.row + m][val.col + n]);

    const check = targetCells.every((el) => el === 0);

    if (check && direction === 'rotate') {
      targetArr.map((val) => (board[val.row][val.col] = blockName));
    } else if (check && direction === 'down') {
      targetArr.map((val) => (board[val.row][val.col] = blockName));
      return 0;
    } else if (!check && direction === 'down') {
      targetArr.map((val) => (board[val.row][val.col] = blockName + 'Fixed'));
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
  } else {
    let targetArr = chooseTargetBlock(blockName, row, col, i, shape);

    targetArr.map((val) => (board[val.row][val.col] = blockName + 'Fixed'));
  }
};

export { blockController };
