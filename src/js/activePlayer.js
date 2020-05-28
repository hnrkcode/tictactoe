const activePlayer = document.getElementById("active-player");

export const setActivePlayer = (player) => {
  activePlayer.textContent = player;
};

export const getActivePlayer = () => {
  return activePlayer.textContent;
};

export const switchActivePlayer = () => {
  if (getActivePlayer() === "Player 1") {
    setActivePlayer("Player 2");
  } else {
    setActivePlayer("Player 1");
  }
};