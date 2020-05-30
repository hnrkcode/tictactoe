export const setActivePlayer = (player) => {
  const activePlayer = document.getElementById("active-player");
  activePlayer.textContent = player;
};

export const getActivePlayer = () => {
  const activePlayer = document.getElementById("active-player");
  return activePlayer.textContent;
};

export const switchActivePlayer = () => {
  if (getActivePlayer() === "Player 1") {
    setActivePlayer("Player 2");
  } else {
    setActivePlayer("Player 1");
  }
};

export const setPlayerScore = ({ playerOne, playerTwo }) => {
  const playerOneScore = document.getElementById("score-player-one");
  playerOneScore.innerText = playerOne.score;

  const playerTwoScore = document.getElementById("score-player-two");
  playerTwoScore.innerText = playerTwo.score;
};

export const updatePlayerScore = (player) => {
  if (player.id === 1) {
    player.score++;
  } else if (player.id === 2) {
    player.score++;
  }
};
