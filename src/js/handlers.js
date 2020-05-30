import {
  getActivePlayer,
  switchActivePlayer,
  setPlayerScore,
  updatePlayerScore,
} from "./players.js";
import { isDraw, isVictory } from "./helpers.js";

export const toggleHoverHandler = ({ cells }, event) => {
  const classList = event.target.classList;

  for (let cell of cells) {
    // Only toggle the hover effect class on cells that isn't already taken.
    if (
      cell.element === event.target &&
      cell.belongsTo === null &&
      !classList.contains("grid")
    ) {
      getActivePlayer() === "Player 1"
        ? classList.toggle("player1-hover")
        : classList.toggle("player2-hover");
    }
  }
};

export const toggleOverlayHandler = (text) => {
  const overlay = document.getElementById("overlay");
  const overlayText = document.getElementById("overlay-text");

  overlayText.textContent = text;
  overlay.classList.toggle("overlay");

  setTimeout(() => {
    overlayText.textContent = "";
    overlay.classList.toggle("overlay");
  }, 3000);
};

export const clickHandler = ({ cells, scores }, resetGame, event) => {
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
            updatePlayerScore(scores.playerOne);
          } else {
            updatePlayerScore(scores.playerTwo);
          }
          setPlayerScore(scores);
          toggleOverlayHandler(`${getActivePlayer()} won!`.toUpperCase());
          resetGame();
          // Check if it's a draw.
        } else if (isDraw(cells)) {
          toggleOverlayHandler("IT'S A DRAW!");
          resetGame();
        } else {
          switchActivePlayer();
        }
      }
    }
  });
};
