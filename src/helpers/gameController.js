import { UImanager } from "./UImanager";
import { Player } from "../factories/player";
import { Ship } from "../factories/ship";
import { GameBoard } from "../factories/board";

export class GameController {
  constructor() {
    this.uiManager = new UImanager();
    this.player = new Player("player-1", false);
    this.computer = new Player("computer", true);
    this.currentPlayer = this.player;
    this.gameOver = false;
    this.setEventListeners();
  }
  initGame() {
    this.uiManager.initBoards();
    this.placeShipsRandomly(this.player);
    this.placeShipsRandomly(this.computer);
    this.displayShips();
    this.uiManager.updateTurnDisplay(this.currentPlayer.name);
  }
  
  setEventListeners() {
    const player2Board = document.getElementById("player2-board");
    player2Board.addEventListener('click',(e)=>{
        if(this.gameOver) return;

        const cell=e.target
        if(cell.classList.contains('cell')){
           const x=parseInt(cell.dataset.x)
           const y=parseInt(cell.dataset.y)
           this.handlePlayerMove(x,y)
        }

    })

  }
  handlePlayerMove(x,y){
    if(this.currentPlayer===this.player){
      try{
        const isHit=this.player.attack(this.computer.gameboard,x,y)
        this.uiManager.displayAttackResult(x,y,this.computer,isHit)
        if(this.computer.gameboard.allShipsSunk()){
            this.endGame(this.player)
            return 
        }
        this.currentPlayer=this.computer
        this.uiManager.updateTurnDisplay(this.currentPlayer.name)
        setTimeout(() => this.computerMove(), 1000);
      }
      catch(error){
           console.log(error)
      }
    }

  }
  computerMove(){
    const isHit=this.computer.randomAttack(this.player.gameboard)
    const lastMove = this.computer.movesMade[this.computer.movesMade.length - 1];
    this.uiManager.displayAttackResult(lastMove[0], lastMove[1], 'player1', isHit);
    if(this.player.gameboard.allShipsSunk()){
        this.endGame(this.computer)
        return
    }
    this.currentPlayer=this.player
    this.uiManager.updateTurnDisplay(this.currentPlayer.name)
  }




  placeShipsRandomly(player) {
    const shipLengths = [5, 4, 3, 3, 2];
    shipLengths.forEach((length) => {
      let placed = false;
      while (!placed) {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        const position = Math.random() < 0.5 ? "horizontal" : "vertical";
        const ship = new Ship(length);
        placed = player.gameboard.placeShip(ship, x, y, position);
      }
    });
  }
  displayShips() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (this.player.gameboard.board[i][j]) {
            this.uiManager.displayShip(i, j, 'player1');
        }
      }
    }
  }
  endGame(winner){
    this.gameOver=true
    this.uiManager.showGameOver(winner.name)
  }
}
