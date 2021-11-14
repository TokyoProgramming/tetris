import React, { useState, useEffect, useCallback, useRef } from 'react';

const Board = () => {
  const BOARD_HEIGHT = 10;
  const BOARD_WIDTH = 10;
  const [row, setRow] = useState(1);
  const refRow = useRef(1);
  const refPosition = useRef(0);
  const [position, setPosition] = useState(0);
  const [board, setBoard] = useState(
    new Array(BOARD_HEIGHT)
      .fill(10)
      .map((row) => new Array(BOARD_WIDTH).fill(0))
  );
  const [blockOrder, setBlockOrder] = useState(
    Array.from({ length: 5 }, () => Math.floor(Math.random() * 7))
  );
  const [blocks, setBlocks] = useState([
    'blockT',
    'blockZ',
    'blockS',
    'blockL',
    'blockJ',
    'blockO',
    'blockI',
  ]);

  const blockT = (rowPosition, colPosition, i = 1) => {
    board[rowPosition - 1][colPosition + i] = 'blockT';
    board[rowPosition][colPosition + i] = 'blockT';
    board[rowPosition][colPosition + i + 1] = 'blockT';
    board[rowPosition][colPosition + i - 1] = 'blockT';
  };

  const blockZ = (rowPosition, colPosition, i = 0) => {
    board[rowPosition - 1][colPosition + i] = 'blockZ';
    board[rowPosition - 1][colPosition + i + 1] = 'blockZ';
    board[rowPosition][colPosition + i + 1] = 'blockZ';
    board[rowPosition][colPosition + i + 2] = 'blockZ';
  };

  const blockS = (rowPosition, colPosition, i = 0) => {
    board[rowPosition - 1][colPosition + i + 2] = 'blockS';
    board[rowPosition - 1][colPosition + i + 1] = 'blockS';
    board[rowPosition][colPosition + i] = 'blockS';
    board[rowPosition][colPosition + i + 1] = 'blockS';
  };

  const blockL = (rowPosition, colPosition, i = 0) => {
    board[rowPosition - 1][colPosition + i + 2] = 'blockL';
    board[rowPosition][colPosition + i] = 'blockL';
    board[rowPosition][colPosition + i + 1] = 'blockL';
    board[rowPosition][colPosition + i + 2] = 'blockL';
  };

  const blockJ = (rowPosition, colPosition, i = 0) => {
    board[rowPosition - 1][colPosition + i] = 'blockJ';
    board[rowPosition][colPosition + i] = 'blockJ';
    board[rowPosition][colPosition + i + 1] = 'blockJ';
    board[rowPosition][colPosition + i + 2] = 'blockJ';
  };

  const blockO = (rowPosition, colPosition, i = 0) => {
    board[rowPosition - 1][colPosition + i] = 'blockO';
    board[rowPosition - 1][colPosition + i + 1] = 'blockO';
    board[rowPosition][colPosition + i] = 'blockO';
    board[rowPosition][colPosition + i + 1] = 'blockO';
  };

  const blockI = (rowPosition, colPosition, i = 0) => {
    board[rowPosition - 1][colPosition + i] = 'blockI';
    board[rowPosition - 1][colPosition + i + 1] = 'blockI';
    board[rowPosition - 1][colPosition + i + 2] = 'blockI';
    board[rowPosition - 1][colPosition + i + 3] = 'blockI';
  };

  const chooseTargetBlock = (blockName, l, m, n) => {
    switch (blockName) {
      case 'blockT':
        return blockT(l, m, n);
      case 'blockZ':
        return blockZ(l, m, n);
      case 'blockS':
        return blockS(l, m, n);
      case 'blockL':
        return blockL(l, m, n);
      case 'blockJ':
        return blockJ(l, m, n);
      case 'blockO':
        return blockO(l, m, n);
      case 'blockI':
        return blockI(l, m, n);
      default:
        console.log('error');
    }
  };

  const findTargetPieces = () => {
    let obj = {};
    let array = [];
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        let target = board[row][col];
        if (
          target === 'blockT' ||
          target === 'blockZ' ||
          target === 'blockS' ||
          target === 'blockL' ||
          target === 'blockJ' ||
          target === 'blockO' ||
          target === 'blockI'
        ) {
          obj = {};
          obj.row = row;
          obj.col = col;
          array.push(obj);
        }
      }
    }
    return array;
  };

  const movePieceRight = () => {
    let res = findTargetPieces();

    if (res.length !== 0) {
      res.forEach((i) => {
        board[i.row][i.col] = 0;
      });
    }
    let currentRow = refRow.current;
    let currentPosition = refPosition.current;
    // blockZ(currentRow, currentPosition, 1);

    blockT(currentRow, currentPosition, 2);
    setPosition((prevPosition) => prevPosition + 1);
    refPosition.current = refPosition.current + 1;
  };

  const movePieceLeft = () => {
    let currentRow = refRow.current;
    let currentPosition = refPosition.current;

    let res = findTargetPieces();
    if (res.length !== 0) {
      res.forEach((j) => (board[j.row][j.col] = 0));
    }

    // blockZ(currentRow, currentPosition, -1);
    blockT(currentRow, currentPosition, 0);
    setPosition((prevPosition) => prevPosition - 1);
    refPosition.current = refPosition.current - 1;
  };

  const listener = useCallback(
    (e) => {
      let currentRow = refRow.current;
      let currentPosition = refPosition.current;
      if (e.code === 'ArrowRight' && currentPosition < 7 && currentRow < 10) {
        e.preventDefault();
        movePieceRight();
      } else if (
        e.code === 'ArrowLeft' &&
        currentPosition > 0 &&
        currentRow < 10
      ) {
        e.preventDefault();
        movePieceLeft();
      }
    },
    // eslint-disable-next-line
    []
  );

  const updatePiece = (currentPosition) => {
    let res = findTargetPieces();
    if (res.length !== 0) {
      res.forEach((i) => {
        board[i.row][i.col] = 0;
      });
    }
    const num = blockOrder[0];
    console.log(blocks[num]);
    const blockName = blocks[num];
    chooseTargetBlock(blockName, row, currentPosition);

    // blockT(row, currentPosition);
  };

  useEffect(() => {
    let interval;

    if (row < 10) {
      interval = setInterval(() => {
        let currentPosition = refPosition.current;

        updatePiece(currentPosition);
        setRow((prevRow) => prevRow + 1);
        refRow.current = refRow.current + 1;
      }, 1000);
    }

    document.addEventListener('keydown', listener);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line
  }, [row]);

  return (
    <div className="board">
      {board.map((row, rowIdx) => (
        <div className="row" key={rowIdx}>
          {row.map((cell, cellIdx) => (
            <div
              key={cellIdx}
              // className={`cell x${rowIdx}${cellIdx}`}
              className={`cell ${cell}`}
              onClick={() => {
                console.log(rowIdx, cellIdx);
              }}
            >
              <span>{/* {cell} */}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
