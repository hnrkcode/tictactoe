class Player {
  constructor(name, active, color) {
    this.name = name;
    this.active = active;
    this.color = color;
  }

  changeStatus() {
    this.active = !this.active;
  }
}

// Creates the tic tac tow board.
class Board {
  constructor() {
    this._render();
  }

  // Render a grid with nine cells.
  _render() {
    const grid = document.getElementById("tictactoe");
    const cells = 9;

    for (let i = 0; i < cells; i++) {
      const cell = document.createElement("div");
      grid.append(cell);
    }

    this._hoverHighlight(grid);
  }

  // Highlight the active cell.
  _hoverHighlight(elem) {
    // Mouse moves into cell.
    elem.addEventListener("mouseover", event => {
      if (!event.target.id && event.target.style.backgroundColor === "") {
        event.target.style.backgroundColor = "red";
      }
    });

    // Mouse moves out from cell.
    elem.addEventListener("mouseout", event => {
      if (!event.target.id && event.target.style.backgroundColor == "red") {
        event.target.style.backgroundColor = "";
      }
    });
  }
}

class TicTacToe {
  constructor() {
    this.board = new Board();
    this.playerOne = new Player("Player 1", true, "blue");
    this.playerTwo = new Player("Player 2", false, "purple");
  }

  startGame() {
    const grid = document.getElementById("tictactoe");

    grid.addEventListener("click", event => {
      if (!event.target.id) {
        if (this.playerOne.active) {
          this._updateBoard(this.playerOne);
        } else if (this.playerTwo.active) {
          this._updateBoard(this.playerTwo);
        }
      }
    });
  }

  _updateBoard(player) {
    const activePlayer = document.querySelector("h2");

    if (this._isEmptyCell(event)) {
      activePlayer.innerText = `Active player: ${player.name}`;
      event.target.style.backgroundColor = player.color;
      this._changeStatus();
    }
  }

  _changeStatus() {
    this.playerOne.changeStatus();
    this.playerTwo.changeStatus();
    console.log(this.playerOne.active, this.playerTwo.active);
  }

  _isEmptyCell(event) {
    if (event.target.style.backgroundColor !== "red") {
      return false;
    }

    return true;
  }
}

const tictactoe = new TicTacToe();
tictactoe.startGame();