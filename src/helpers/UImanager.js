import { GameController } from "./gameController";
export class UImanager {
  constructor() {
    this.player1Board = document.getElementById("player1-board");
    this.player2Board = document.getElementById("player2-board");
    this.turnDisplay = document.getElementById("current-turn");
    this.randomize = document.getElementById("randomize");
    this.reset = document.getElementById("reset");
    this.currentOrientation = 'horizontal';
    this.placeshipy=document.getElementById('placeShips')
    
  }
  initBoards() {
    this.createBoard(this.player1Board, "player1");
    this.createBoard(this.player2Board, "player2");
    this.randomize.style.display = "inline";
  }
  createBoard(boardElement, playerId) {
    boardElement.innerHTML = "";
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.x = i;
        cell.dataset.y = j;
        cell.dataset.player = playerId;
        
        boardElement.appendChild(cell);
      }
    }
  }
  updateCell(x, y, playerId, state) {
    const board =
      playerId === "player1" ? this.player1Board : this.player2Board;
    const cell = board.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    if (cell) {
      cell.classList.remove("ship", "hit", "miss");
      cell.classList.add(state);
      return cell
    }
    return null
  }

  displayShip(x, y, playerId) {
    const cell=this.updateCell(x, y, playerId, "ship");
    if (playerId === 'player1') {
      cell.setAttribute('draggable', true);
    }
  }

  updateTurnDisplay(playerName) {
    this.turnDisplay.style.display = "block";
    this.turnDisplay.textContent = `It's ${playerName}'s turn`;
  }

  displayAttackResult(x, y, playerId, isHit) {
    this.updateCell(x, y, playerId, isHit ? "hit" : "miss");
  }
  showGameOver(winner) {
    this.turnDisplay.textContent = `${winner} Won!!!`;
  }
  manageButtons() {
    this.randomize.style.display = "none";
    this.reset.style.display = "inline";
    this.placeshipy.style.display='none'
  }

  

 
  
}
