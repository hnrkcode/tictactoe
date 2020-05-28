import { isDraw, isVictory } from "./helpers.js";
import { toggleHoverEffect, toggleOverlay } from "./togglers.js";
import {
  setActivePlayer,
  getActivePlayer,
  switchActivePlayer,
} from "./activePlayer.js";

const grid = document.querySelector(".grid");
const playerOneScore = document.getElementById("score-player-one");
const playerTwoScore = document.getElementById("score-player-two");
const cells = [];
const size = 9;
const score = {
  playerOne: 0,
  playerTwo: 0,
};

const setPlayerScore = () => {
  playerOneScore.innerText = score.playerOne;
  playerTwoScore.innerText = score.playerTwo;
};

const updatePlayerScore = (player) => {
  if (player === 1) {
    score.playerOne++;
  } else if (player === 2) {
    score.playerTwo++;
  }
}

const renderGrid = () => {
  // Initialize active player.
  setActivePlayer("Player 1");

  // Initialize score.
  setPlayerScore();

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

const clickedCell = (cells, event) => {
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
        if (isVictory(cells)) {
          if (getActivePlayer() === "Player 1") {
            updatePlayerScore(1);
          } else {
            updatePlayerScore(2);
          }
          setPlayerScore();
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
};

grid.addEventListener("mouseover", toggleHoverEffect.bind(null, cells));
grid.addEventListener("mouseout", toggleHoverEffect.bind(null, cells));
grid.addEventListener("click", clickedCell.bind(null, cells));

renderGrid();
