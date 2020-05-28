import { getActivePlayer } from "./activePlayer.js";

export const toggleHoverEffect = (cells, event) => {
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

export const toggleOverlay = (text) => {
  const overlay = document.getElementById("overlay");
  const overlayText = document.getElementById("overlay-text");

  overlayText.textContent = text;
  overlay.classList.toggle("overlay");

  setTimeout(() => {
    overlayText.textContent = "";
    overlay.classList.toggle("overlay");
  }, 3000);
};