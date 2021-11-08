import React, { useState, useEffect } from 'react';

const Board = () => {
  const BOARD_SIZE = 10;
  const [count, setCount] = useState(1);
  const [board, setBoard] = useState(
    new Array(BOARD_SIZE).fill(0).map((row) => new Array(BOARD_SIZE).fill(0))
  );

  const createBoard = (BOARD_SIZE) => {
    let A = new Array(BOARD_SIZE)
      .fill(1)
      .map((row) => new Array(BOARD_SIZE).fill(1));
    return A;
  };

  useEffect(() => {
    let interval;

    if (count < 5) {
      interval = setInterval(() => {
        let createdBoard = createBoard(10);
        createdBoard[count - 1][1] = 10;
        createdBoard[count][1] = 10;
        createdBoard[count + 1][1] = 10;
        createdBoard[count + 1][0] = 10;
        createdBoard[count + 1][2] = 10;

        setBoard(createdBoard);
        setCount(count + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div className="board">
      {board.map((row, rowIdx) => (
        <div className="row" key={rowIdx}>
          {row.map((cell, cellIdx) => (
            <div
              key={cellIdx}
              className={`cell x${cell}`}
              onClick={() => {
                console.log(cell);
              }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
