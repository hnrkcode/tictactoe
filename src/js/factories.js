import { setActivePlayer, setPlayerScore } from "./players.js";

export const gridFactory = ({ cells, size, scores }, grid) => {
  const renderGrid = () => {
    // Initialize active player.
    setActivePlayer("Player 1");

    // Initialize scores.
    setPlayerScore(scores);

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

  return [renderGrid, resetGame];
};

// const body = document.querySelector("body");

// const renderOverlay = () => {
//   const overlay = document.createElement("div");
//   overlay.id = "overlay";

//   const overlayText = document.createElement("div");
//   overlayText.id = "overlay-text";

//   overlay.append(overlayText);
//   body.append(overlay);
// };

// const renderHeader = () => {
//   const header = document.createElement("header");
//   const info = document.createElement("div");
//   info.className = "info";

//   for (let i = 1; i <= 2; i++) {
//     const el = document.createElement("div");
//     const h5 = document.createElement("h5");
//     const span = document.createElement("span");

//     h5.append(span);

//     if (i === 1) {
//       span.textContent = "Active";

//       const para = document.createElement("p");
//       para.id = "active-player";

//       el.append(h5, para);
//     } else {
//       span.textContent = "Score";

//       const score = document.createElement("div");
//       score.id = "score";

//       for (let j = 1; j <= 2; j++) {
//         const scoreDiv = document.createElement("div");
//         const scorePara = document.createElement("p");
//         const scoreSpan = document.createElement("span");
//         j === 1 ? scoreSpan.id = "score-player-one" : scoreSpan.id = "score-player-two";

//         scorePara.append(scoreSpan);
//         scoreDiv.append(scorePara);
//         score.append(scoreDiv);
//       }

//       el.append(h5, span);
//     }

//     info.append(el);
//   }

//   header.append(info);
//   body.append(header);
// };

// const renderGrid = (grid) => {
//   // Initialize active player.
//   setActivePlayer("Player 1");

//   // Initialize score.
//   setPlayerScore();

//   // Render grid.
//   for (let i = 0; i < size; i++) {
//     const cell = document.createElement("div");
//     grid.append(cell);
//     cells.push({
//       element: cell,
//       belongsTo: null,
//     });
//   }
// };

// const renderMain = () => {
//   const main = document.createElement("main");
//   const grid = document.createElement("div");
//   grid.className = "grid";

// };

// export const render = () => {
//   renderOverlay();
//   renderHeader();
// };
