import { gridFactory } from "./factories.js";
import { toggleHoverHandler, clickHandler } from "./handlers.js";

const startGame = () => {
  const data = {
    cells: [],
    size: 9,
    scores: {
      playerOne: {
        id: 1,
        score: 0,
      },
      playerTwo: {
        id: 2,
        score: 0,
      },
    },
  };
  const grid = document.querySelector(".grid");
  const [renderGrid, resetGame] = gridFactory(data, grid);

  grid.addEventListener("mouseover", toggleHoverHandler.bind(null, data));
  grid.addEventListener("mouseout", toggleHoverHandler.bind(null, data));
  grid.addEventListener("click", clickHandler.bind(null, data, resetGame));

  renderGrid();
};

startGame();
