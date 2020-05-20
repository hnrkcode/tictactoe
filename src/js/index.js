const grid = document.querySelector(".grid");
const activePlayer = document.getElementById("active-player");
const playerOneScore = document.getElementById("score-player-one");
const playerTwoScore = document.getElementById("score-player-two");
const cells = [];
const size = 9;
const score = {
  playerOne: 0,
  playerTwo: 0,
};

// The game is draw if all cells are used but no one has won.
const isDraw = (cellArray) => {
  return (
    cellArray.map((cell) => cell.belongsTo).filter((cell) => cell === null)
      .length === 0
  );
};

const toggleOverlay = (text) => {
  const overlay = document.getElementById("overlay");
  const overlayText = document.getElementById("overlay-text");

  overlayText.textContent = text;
  overlay.classList.toggle("overlay");

  setTimeout(() => {
    overlayText.textContent = "";
    overlay.classList.toggle("overlay");
  }, 3000);
};

const setScore = () => {
  playerOneScore.innerText = score.playerOne;
  playerTwoScore.innerText = score.playerTwo;
};

const setActivePlayer = (player) => {
  activePlayer.textContent = player;
};

const getActivePlayer = () => {
  return activePlayer.textContent;
};

const switchActivePlayer = () => {
  if (getActivePlayer() === "Player 1") {
    setActivePlayer("Player 2");
  } else {
    setActivePlayer("Player 1");
  }
};

const renderGrid = () => {
  // Initialize active player.
  setActivePlayer("Player 1");

  // Initialize score.
  setScore();

  // Render grid.
  for (let i = 0; i < size; i++) {
    const cell = document.createElement("div");
    grid.append(cell);
    cells.push({
      element: cell,
      belongsTo: null,
    });
  }
};

const resetGame = () => {
  grid.innerHTML = "";
  cells.length = 0;
  renderGrid();
};

const toggleHoverEffect = (event) => {
  const classList = event.target.classList;
  const activePlayer = getActivePlayer();

  for (let cell of cells) {
    // Only toggle the hover effect class on cells that isn't already taken.
    if (
      cell.element === event.target &&
      cell.belongsTo === null &&
      !classList.contains("grid")
    ) {
      activePlayer === "Player 1"
        ? classList.toggle("player1-hover")
        : classList.toggle("player2-hover");
    }
  }
};

// Convert a 1D array to a 2D array.
const convertArray = (arr1D) => {
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

const isVictory = () => {
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

const clickedCell = (event) => {
  const classList = event.target.classList;

  cells.forEach((cell) => {
    // Do this if the clicked cell isn't taken.
    if (cell.belongsTo === null && cell.element === event.target) {
      cell.belongsTo = getActivePlayer();

      // Cell now belongs to the player that clicked on it.
      if (
        !classList.contains("player1-clicked") ||
        !classList.contains("player2-clicked")
      ) {
        getActivePlayer() === "Player 1"
          ? classList.add("player1-clicked")
          : classList.add("player2-clicked");
        classList.remove("player1-hover", "player2-hover");

        // Check if the player has won.
        if (isVictory()) {
          if (getActivePlayer() === "Player 1") {
            score.playerOne++;
          } else {
            score.playerTwo++;
          }
          setScore();
          toggleOverlay(`${getActivePlayer()} won!`.toUpperCase());
          resetGame();
          // Check if it's a draw.
        } else if (isDraw(cells)) {
          toggleOverlay("IT'S A DRAW!");
          resetGame();
        } else {
          switchActivePlayer();
        }
      }
    }
  });

  console.log("cells", cells);
};

grid.addEventListener("mouseover", toggleHoverEffect);
grid.addEventListener("mouseout", toggleHoverEffect);
grid.addEventListener("click", clickedCell);

renderGrid();
