// The game is draw if all cells are used but no one has won.
export const isDraw = (cellArray) => {
  return (
    cellArray.map((cell) => cell.belongsTo).filter((cell) => cell === null)
      .length === 0
  );
};

// Convert a 1D array to a 2D array.
export const convertArray = (arr1D) => {
  const size = arr1D.length;
  const arr2D = [];

  for (let i = 0, j = -1; i < size; i++) {
    if (i % 3 === 0) {
      j++;
      arr2D[j] = [];
    }
    arr2D[j].push(arr1D[i]);
  }

  return arr2D;
};

// Check if game is won.
export const isVictory = (cells) => {
  const array2D = convertArray(cells);
  for (let i = 0; i < 3; i++) {
    // Horizontal line.
    if (
      array2D[i][0].belongsTo === "Player 1" &&
      array2D[i][1].belongsTo === "Player 1" &&
      array2D[i][2].belongsTo === "Player 1"
    ) {
      return true;
    } else if (
      array2D[i][0].belongsTo === "Player 2" &&
      array2D[i][1].belongsTo === "Player 2" &&
      array2D[i][2].belongsTo === "Player 2"
    ) {
      return true;
    }

    // Vertical line.
    if (
      array2D[0][i].belongsTo === "Player 1" &&
      array2D[1][i].belongsTo === "Player 1" &&
      array2D[2][i].belongsTo === "Player 1"
    ) {
      return true;
    } else if (
      array2D[0][i].belongsTo === "Player 2" &&
      array2D[1][i].belongsTo === "Player 2" &&
      array2D[2][i].belongsTo === "Player 2"
    ) {
      return true;
    }
  }

  // Diagonal lines.
  if (
    array2D[0][0].belongsTo === "Player 1" &&
    array2D[1][1].belongsTo === "Player 1" &&
    array2D[2][2].belongsTo === "Player 1"
  ) {
    return true;
  } else if (
    array2D[0][0].belongsTo === "Player 2" &&
    array2D[1][1].belongsTo === "Player 2" &&
    array2D[2][2].belongsTo === "Player 2"
  ) {
    return true;
  } else if (
    array2D[0][2].belongsTo === "Player 1" &&
    array2D[1][1].belongsTo === "Player 1" &&
    array2D[2][0].belongsTo === "Player 1"
  ) {
    return true;
  } else if (
    array2D[0][2].belongsTo === "Player 2" &&
    array2D[1][1].belongsTo === "Player 2" &&
    array2D[2][0].belongsTo === "Player 2"
  ) {
    return true;
  }

  return false;
};