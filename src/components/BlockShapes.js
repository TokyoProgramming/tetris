const blockT = (rowPosition, colPosition, i = 0, shape) => {
  let arr;
  let shapeType = shape % 4;

  if (shapeType === 0) {
    // 1 1 1
    // 0 1 0
    // 0 0 0
    if (colPosition === 1) {
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
      arr = [
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
          col: colPosition + i - 1,
        },
      ];
    }
  } else if (shapeType === 1) {
    // 0 1 0
    // 0 1 1
    // 0 1 0
    arr = [
      {
        row: rowPosition - 2,
        col: colPosition + i,
      },
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
    ];
  } else if (shapeType === 2) {
    // 0 1 0
    // 1 1 1
    // 0 0 0

    if (colPosition === 1) {
      arr = [
        {
          row: rowPosition,
          col: colPosition + i + 1,
        },
        {
          row: rowPosition - 1,
          col: colPosition + i,
        },
        {
          row: rowPosition - 1,
          col: colPosition + i + 1,
        },
        {
          row: rowPosition - 1,
          col: colPosition + i + 2,
        },
      ];
    } else {
      arr = [
        {
          row: rowPosition,
          col: colPosition + i,
        },
        {
          row: rowPosition - 1,
          col: colPosition + i - 1,
        },
        {
          row: rowPosition - 1,
          col: colPosition + i,
        },
        {
          row: rowPosition - 1,
          col: colPosition + i + 1,
        },
      ];
    }
  } else if (shapeType === 3) {
    // - - *
    // - * *
    // - - *
    arr = [
      {
        row: rowPosition - 1,
        col: colPosition + i,
      },
      {
        row: rowPosition - 2,
        col: colPosition + i + 1,
      },
      {
        row: rowPosition - 1,
        col: colPosition + i + 1,
      },
      {
        row: rowPosition,
        col: colPosition + i + 1,
      },
    ];
  }

  return arr;
};

const blockZ = (rowPosition, colPosition, i = 0, shape) => {
  let arr;
  let shapeType = shape % 2;
  if (shapeType === 0) {
    // 1 1 0
    // 0 1 1
    // 0 0 0
    if (colPosition === 9) {
      arr = [
        {
          row: rowPosition - 1,
          col: colPosition + i - 1,
        },
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
      ];
    } else {
      arr = [
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
    }
  } else if (shapeType === 1) {
    // 0 0 1
    // 0 1 1
    // 0 1 0
    arr = [
      {
        row: rowPosition - 1,
        col: colPosition + i,
      },
      {
        row: rowPosition - 1,
        col: colPosition + i + 1,
      },
      {
        row: rowPosition - 2,
        col: colPosition + i + 1,
      },
      {
        row: rowPosition,
        col: colPosition + i,
      },
    ];
  }

  return arr;
};

const blockS = (rowPosition, colPosition, i = 0, shape) => {
  let arr;
  let shapeType = shape % 2;
  if (shapeType === 0) {
    // 0 1 1
    // 1 1 0
    // 0 0 0
    if (colPosition === 1) {
      arr = [
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
    } else {
      arr = [
        {
          row: rowPosition - 1,
          col: colPosition + i + 1,
        },
        {
          row: rowPosition - 1,
          col: colPosition + i,
        },
        {
          row: rowPosition,
          col: colPosition + i - 1,
        },
        {
          row: rowPosition,
          col: colPosition + i,
        },
      ];
    }
  } else if (shapeType === 1) {
    // 0 1 0
    // 0 1 1
    // 0 0 1
    arr = [
      {
        row: rowPosition - 2,
        col: colPosition + i,
      },
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
    ];
  }

  return arr;
};

const blockL = (rowPosition, colPosition, i = 0, shape) => {
  let arr;
  let shapeType = shape % 4;
  if (shapeType === 0) {
    // 0 0 1
    // 1 1 1
    // 0 0 0
    if (colPosition === 1) {
      arr = [
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
    } else {
      arr = [
        {
          row: rowPosition - 1,
          col: colPosition + i + 1,
        },
        {
          row: rowPosition,
          col: colPosition + i - 1,
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
    }
  } else if (shapeType === 1) {
    // 0 1 0
    // 0 1 0
    // 0 1 1
    arr = [
      {
        row: rowPosition - 2,
        col: colPosition + i,
      },
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
    ];
  } else if (shapeType === 2) {
    // 1 1 1
    // 1 0 0
    // 0 0 0
    if (colPosition === 1) {
      arr = [
        {
          row: rowPosition,
          col: colPosition + i,
        },
        {
          row: rowPosition - 1,
          col: colPosition + i,
        },
        {
          row: rowPosition - 1,
          col: colPosition + i + 1,
        },
        {
          row: rowPosition - 1,
          col: colPosition + i + 2,
        },
      ];
    } else {
      arr = [
        {
          row: rowPosition,
          col: colPosition + i - 1,
        },
        {
          row: rowPosition - 1,
          col: colPosition + i - 1,
        },
        {
          row: rowPosition - 1,
          col: colPosition + i,
        },
        {
          row: rowPosition - 1,
          col: colPosition + i + 1,
        },
      ];
    }
  } else if (shapeType === 3) {
    // 0 1 1
    // 0 0 1
    // 0 0 1
    arr = [
      {
        row: rowPosition - 2,
        col: colPosition + i,
      },
      {
        row: rowPosition - 2,
        col: colPosition + i + 1,
      },
      {
        row: rowPosition - 1,
        col: colPosition + i + 1,
      },
      {
        row: rowPosition,
        col: colPosition + i + 1,
      },
    ];
  }

  return arr;
};

const blockJ = (rowPosition, colPosition, i = 0, shape) => {
  let arr;
  let shapeType = shape % 4;
  console.log(colPosition);
  console.log(shapeType);
  if (shapeType === 0) {
    // 1 0 0
    // 1 1 1
    // 0 0 0
    if (colPosition === 9) {
      arr = [
        {
          row: rowPosition - 1,
          col: colPosition + i - 1,
        },
        {
          row: rowPosition,
          col: colPosition + i - 1,
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
    } else {
      arr = [
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
    }
  } else if (shapeType === 1) {
    // 0 1 1
    // 0 1 0
    // 0 1 0
    arr = [
      {
        row: rowPosition - 2,
        col: colPosition + i,
      },
      {
        row: rowPosition - 2,
        col: colPosition + i + 1,
      },
      {
        row: rowPosition - 1,
        col: colPosition + i,
      },
      {
        row: rowPosition,
        col: colPosition + i,
      },
    ];
  } else if (shapeType === 2) {
    // 1 1 1
    // 0 0 1
    // 0 0 0
    if (colPosition === 9) {
      arr = [
        {
          row: rowPosition - 1,
          col: colPosition + i - 1,
        },
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
      ];
    } else {
      arr = [
        {
          row: rowPosition - 1,
          col: colPosition + i,
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
          col: colPosition + i + 2,
        },
      ];
    }
  } else if (shapeType === 3) {
    // 0 0 1
    // 0 0 1
    // 0 1 1
    arr = [
      {
        row: rowPosition - 2,
        col: colPosition + i + 1,
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
        col: colPosition + i,
      },
    ];
  }

  return arr;
};

const blockO = (rowPosition, colPosition, i = 1, shape) => {
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

  return arr;
};

const blockI = (rowPosition, colPosition, i = 0, shape) => {
  let arr;
  let shapeType = shape % 2;
  if (shapeType === 0) {
    // 0 0 0 0
    // 1 1 1 1
    // 0 0 0 0
    // 0 0 0 0
    if (colPosition === 0) {
      arr = [
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
        {
          row: rowPosition,
          col: colPosition + i + 4,
        },
      ];
    } else if (colPosition === 9) {
      arr = [
        {
          row: rowPosition,
          col: colPosition + i - 2,
        },
        {
          row: rowPosition,
          col: colPosition + i - 1,
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
    } else {
      arr = [
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
    }
  } else if (shapeType === 1) {
    // 0 0 1 0
    // 0 0 1 0
    // 0 0 1 0
    // 0 0 1 0

    arr = [
      {
        row: rowPosition - 3,
        col: colPosition + i + 1,
      },
      {
        row: rowPosition - 2,
        col: colPosition + i + 1,
      },
      {
        row: rowPosition - 1,
        col: colPosition + i + 1,
      },
      {
        row: rowPosition,
        col: colPosition + i + 1,
      },
    ];
  }

  return arr;
};

const chooseTargetBlock = (blockName, row, col, i, shape) => {
  switch (blockName) {
    case 'blockT':
      return blockT(row, col, i, shape);
    case 'blockZ':
      return blockZ(row, col, i, shape);
    case 'blockS':
      return blockS(row, col, i, shape);
    case 'blockL':
      return blockL(row, col, i, shape);
    case 'blockJ':
      return blockJ(row, col, i, shape);
    case 'blockO':
      return blockO(row, col, i, shape);
    case 'blockI':
      return blockI(row, col, i, shape);
    default:
      return;
  }
};

export { chooseTargetBlock };
