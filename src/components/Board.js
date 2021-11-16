import React, { useState, useEffect, useCallback, useRef } from 'react';
import { chooseTargetBlock } from './Blocks';
import { blockFixedHandler } from './BlockFixed';

const Board = () => {
  const BOARD_HEIGHT = 13;
  const BOARD_WIDTH = 10;
  const [row, setRow] = useState(3);
  const refRow = useRef(3);
  const refPosition = useRef(0);
  const [position, setPosition] = useState(0);

  const [board, setBoard] = useState(
    new Array(BOARD_HEIGHT).fill(10).map(() => new Array(BOARD_WIDTH).fill(0))
  );
  const [next, setNext] = useState(true);
  const refNext = useRef(true);

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
  const [order, setOrder] = useState(0);
  const refOrder = useRef(0);

  const findTargetPieces = () => {
    let obj = {};
    let array = [];
    for (let row = 0; row < 12; row++) {
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

  const movePieceRight = (currentRow, currentPosition, blockName) => {
    let res = findTargetPieces();
    if (res.length !== 0) {
      res.forEach((j) => (board[j.row][j.col] = 0));
    }
    chooseTargetBlock(board, blockName, currentRow, currentPosition, 1);
    setPosition((prevPosition) => prevPosition + 1);
    refPosition.current = refPosition.current + 1;
  };

  const movePieceLeft = (currentRow, currentPosition, blockName) => {
    let res = findTargetPieces();
    if (res.length !== 0) {
      res.forEach((j) => (board[j.row][j.col] = 0));
    }
    chooseTargetBlock(board, blockName, currentRow, currentPosition, -1);
    setPosition((prevPosition) => prevPosition - 1);
    refPosition.current = refPosition.current - 1;
  };

  const listener = useCallback((e) => {
    let currentRow = refRow.current;
    let currentPosition = refPosition.current;
    let currentOrder = refOrder.current;

    let num = blockOrder[currentOrder];
    let blockName = blocks[num];
    if (
      e.code === 'ArrowRight' &&
      currentPosition < 7 &&
      currentRow < BOARD_HEIGHT
    ) {
      e.preventDefault();
      movePieceRight(currentRow, currentPosition, blockName);
    } else if (
      e.code === 'ArrowLeft' &&
      currentPosition > 0 &&
      currentRow < BOARD_HEIGHT
    ) {
      e.preventDefault();
      movePieceLeft(currentRow, currentPosition, blockName);
    }
    // eslint-disable-next-line
  }, []);

  const updatePiece = (currentPosition) => {
    let res = findTargetPieces();
    if (res.length !== 0) {
      res.forEach((i) => {
        board[i.row][i.col] = 0;
      });
    }
    const num = blockOrder[order];
    const blockName = blocks[num];
    let result = chooseTargetBlock(board, blockName, row, currentPosition);
    return result;
  };

  const fixedPiece = (currentPosition) => {
    const num = blockOrder[order];
    const blockName = blocks[num];
    let rowNum = row - 1;

    blockFixedHandler(board, blockName, rowNum, currentPosition);
  };

  const initState = () => {
    setRow(3);
    setOrder((prevOrder) => prevOrder + 1);
    refRow.current = 3;
    refPosition.current = 0;
    refOrder.current = refOrder.current + 1;
    setNext(true);
  };

  useEffect(() => {
    let interval;
    let res;
    if (row < BOARD_HEIGHT - 1 && next) {
      interval = setInterval(() => {
        let currentPosition = refPosition.current;
        res = updatePiece(currentPosition, order);
        setRow((prevRow) => prevRow + 1);
        refRow.current = refRow.current + 1;
        setNext(res);
        console.log(res);
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
  }, [row, next]);

  return (
    <div className="board">
      {board.map((row, rowIdx) => (
        <div className="row" key={rowIdx}>
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
