import React, { useState, useEffect, useCallback, useRef } from 'react';

// import { initialBoard } from './InitialBoard';
import { blockController } from './BlockController';

const Board = () => {
  const BOARD_HEIGHT = 25;
  const BOARD_WIDTH = 12;
  const [row1, setRow1] = useState(3);
  const refRow = useRef(3);
  const refPosition = useRef(2);
  const [position, setPosition] = useState(2);
  const [board, setBoard] = useState(
    new Array(BOARD_HEIGHT).fill(10).map(() => new Array(BOARD_WIDTH).fill(0))
  );

  const [next, setNext] = useState(0);
  const refNext = useRef(0);
  const refShape = useRef(10);
  const [blockOrder, setBlockOrder] = useState(
    Array.from({ length: 1 }, () => Math.floor(Math.random() * 7))
  );
  const [blocks, setBlocks] = useState([
    'blockI',
    'blockJ',
    'blockL',
    'blockS',
    'blockT',
    'blockZ',
    'blockO',
  ]);
  const [order, setOrder] = useState(0);
  const refOrderArray = useRef([]);
  const refOrder = useRef(0);

  const findTargetPieces = () => {
    let obj = {};
    let array = [];
    for (let row = 0; row < BOARD_HEIGHT; row++) {
      for (let col = 0; col < BOARD_WIDTH; col++) {
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

  const movePieceRight = (currentRow, currentPosition, blockName) => {
    let res = findTargetPieces();
    if (res.length !== 0) {
      res.forEach((j) => (board[j.row][j.col] = 0));
    }
    const moveDirection = 'right';
    const currentShape = refShape.current;
    let res1 = blockController(
      board,
      blockName,
      currentRow,
      currentPosition,
      1,
      moveDirection,
      currentShape
    );
    if (res1 === 0) {
      setPosition((prevPosition) => prevPosition + 1);
      refPosition.current = refPosition.current + 1;
    }
    return res1;
  };

  const movePieceLeft = (currentRow, currentPosition, blockName) => {
    let res = findTargetPieces();
    if (res.length !== 0) {
      res.forEach((j) => (board[j.row][j.col] = 0));
    }
    const moveDirection = 'left';
    const currentShape = refShape.current;
    let res1 = blockController(
      board,
      blockName,
      currentRow,
      currentPosition,
      -1,
      moveDirection,
      currentShape
    );
    if (res1 === 0) {
      setPosition((prevPosition) => prevPosition - 1);
      refPosition.current = refPosition.current - 1;
    }
    return res1;
  };

  const movePieceDown = (currentRow, currentPosition, blockName) => {
    let res = findTargetPieces();
    if (res.length !== 0) {
      res.forEach((j) => (board[j.row][j.col] = 0));
    }
    const moveDirection = 'down';
    const currentShape = refShape.current;
    let res1 = blockController(
      board,
      blockName,
      currentRow,
      currentPosition,
      0,
      moveDirection,
      currentShape
    );

    if (res1 === 0) {
      setRow1((prevRow) => prevRow + 1);
      refRow.current = refRow.current + 1;
    }

    return res1;
  };

  const rotatePiece = (currentRow, currentPosition, blockName) => {
    let res = findTargetPieces();
    if (res.length !== 0) {
      res.forEach((j) => (board[j.row][j.col] = 0));
    }
    const currentShape = refShape.current;
    const moveDirection = 'rotate';
    blockController(
      board,
      blockName,
      currentRow,
      currentPosition,
      0,
      moveDirection,
      currentShape
    );
    refShape.current = refShape.current + 1;
  };

  const updatePiece = () => {
    let res = findTargetPieces();
    if (res.length !== 0) {
      res.forEach((i) => {
        board[i.row][i.col] = 0;
      });
    }

    const moveDirection = 'update';

    let currentPosition = refPosition.current;
    let currentOrderArray = refOrderArray.current;
    const num = currentOrderArray[order];
    const blockName = blocks[num];
    let currentRow = refRow.current;
    const currentShape = refShape.current;
    let result = blockController(
      board,
      blockName,
      currentRow,
      currentPosition,
      0,
      moveDirection,
      currentShape
    );
    return result;
  };

  const listener = useCallback((e) => {
    let currentRow = refRow.current;
    let currentPosition = refPosition.current;
    let currentOrderArray = refOrderArray.current;
    let currentOrder = refOrder.current;
    const num = currentOrderArray[currentOrder];
    const blockName = blocks[num];

    let k = 8;
    if (blockName === 'blockO') {
      k = 9;
    }
    if (
      e.code === 'ArrowRight' &&
      currentPosition < k &&
      currentRow < BOARD_HEIGHT
    ) {
      e.preventDefault();
      movePieceRight(currentRow, currentPosition, blockName);
    } else if (
      e.code === 'ArrowLeft' &&
      currentPosition > 1 &&
      currentRow < BOARD_HEIGHT
    ) {
      e.preventDefault();
      movePieceLeft(currentRow, currentPosition, blockName);
    } else if (e.code === 'ArrowUp') {
      e.preventDefault();
      rotatePiece(currentRow, currentPosition, blockName);
    } else if (
      e.code === 'ArrowDown' &&
      currentRow < BOARD_HEIGHT &&
      currentRow !== 3
    ) {
      console.log(currentRow);
      e.preventDefault();
      movePieceDown(currentRow, currentPosition, blockName);
    }
    // eslint-disable-next-line
  }, []);

  const fixedPiece = (currentPosition) => {
    let currentRow = refRow.current;
    let currentOrderArray = refOrderArray.current;
    const num = currentOrderArray[order];
    const blockName = blocks[num];

    const currentShape = refShape.current;
    const moveDirection = 'fixed';
    blockController(
      board,
      blockName,
      currentRow - 1,
      currentPosition,
      0,
      moveDirection,
      currentShape,
      'fixed'
    );
  };

  const initState = () => {
    setRow1(3);
    setOrder((prevOrder) => prevOrder + 1);
    refOrder.current = refOrder.current + 1;
    refRow.current = 3;
    refPosition.current = 2;
    refNext.current = 0;
    setNext(0);
    const num = Math.floor(Math.random() * 7);
    setBlockOrder((prevArray) => [...prevArray, num]);
  };

  useEffect(() => {
    let interval;
    let res;

    if (row1 < BOARD_HEIGHT - 1 && next === 0) {
      interval = setInterval(() => {
        refOrderArray.current = blockOrder;

        res = updatePiece();
        setRow1((prevRow) => prevRow + 1);
        refRow.current = refRow.current + 1;
        setNext(res);
      }, 1000);
    } else {
      let currentPosition = refPosition.current;
      fixedPiece(currentPosition);
      initState();
    }
    document.addEventListener('keydown', listener);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line
  }, [row1, next]);

  return (
    <div className="board">
      {board.map((row, rowIdx) => (
        <div className={`row row-${rowIdx}`} key={rowIdx}>
          {row.map((cell, cellIdx) => (
            <div key={cellIdx} className={`cell ${cell}`}>
              <span></span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
