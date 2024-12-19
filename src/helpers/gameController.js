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
    this.randomize=document.getElementById('randomize')
    this.placeshipy=document.getElementById('placeShips')
    
    
    
  }
  initGame() {
    this.uiManager.initBoards();
    this.randomize.addEventListener('click',()=>{
        this.placeShipsRandomly(this.player);
        this.placeShipsRandomly(this.computer);
        this.displayShips();
        this.uiManager.updateTurnDisplay(this.currentPlayer.name);
        this.uiManager.manageButtons()
        
    })
    this.placeshipy.addEventListener('click',()=>{
        
        this.placeShipsRandomly(this.player);
        this.displayShips();
        this.moveShips(this.player)
        
        this.placeShipsRandomly(this.computer);

        this.uiManager.updateTurnDisplay(this.currentPlayer.name);
        this.uiManager.manageButtons()
      
    })
    }
    moveShips(){
      const ships = this.player.gameboard.ships;
      const board = document.getElementById('player1-board');
      let draggedShip = null;
      let currentOrientation = 'horizontal';
  
      // Function to get ship coordinates
      const getShipCoords = (ship) => {
        const coords = [];
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 10; j++) {
            if (this.player.gameboard.board[i][j] === ship) {
              coords.push([i, j]);
            }
          }
        }
        return coords;
      };
  
      // Add draggable attribute to ship cells
      ships.forEach(ship => {
        const coords = getShipCoords(ship);
        coords.forEach(([x, y]) => {
          const cell = board.querySelector(`[data-x="${x}"][data-y="${y}"]`);
          cell.setAttribute('draggable', true);
          
          cell.addEventListener('dragstart', (e) => {
            draggedShip = {
              ship: ship,
              coords: coords,
              orientation: currentOrientation
            };
            coords.forEach(([cx, cy]) => {
              const shipCell = board.querySelector(`[data-x="${cx}"][data-y="${cy}"]`);
              shipCell.classList.add('dragging');
            });
          });
  
          cell.addEventListener('dragend', () => {
            coords.forEach(([cx, cy]) => {
              const shipCell = board.querySelector(`[data-x="${cx}"][data-y="${cy}"]`);
              shipCell.classList.remove('dragging');
            });
          });
          
          // Add rotation on click
          cell.addEventListener('click', () => {
            if (!draggedShip) {
              const oldCoords = getShipCoords(ship);
              const firstCoord = oldCoords[0];
              
              // Remove ship from old position
              oldCoords.forEach(([x, y]) => {
                this.player.gameboard.board[x][y] = null;
                const cell = board.querySelector(`[data-x="${x}"][data-y="${y}"]`);
                cell.classList.remove('ship');
              });
  
              // Try to place ship in new orientation
              const newOrientation = currentOrientation === 'horizontal' ? 'vertical' : 'horizontal';
              if (this.player.gameboard.placeShip(ship, firstCoord[0], firstCoord[1], newOrientation)) {
                currentOrientation = newOrientation;
                this.displayShips();
              } else {
                // If rotation fails, place ship back in original position
                oldCoords.forEach(([x, y]) => {
                  this.player.gameboard.board[x][y] = ship;
                });
                this.displayShips();
              }
            }
          });
        });
      });
  
      // Add drop functionality to all cells
      const cells = board.getElementsByClassName('cell');
      Array.from(cells).forEach(cell => {
        cell.addEventListener('dragover', (e) => {
          e.preventDefault();
          if (draggedShip) {
            cell.classList.add('preview');
          }
        });
  
        cell.addEventListener('dragleave', () => {
          cell.classList.remove('preview');
        });
  
        cell.addEventListener('drop', (e) => {
          e.preventDefault();
          cell.classList.remove('preview');
  
          if (draggedShip) {
            const x = parseInt(cell.dataset.x);
            const y = parseInt(cell.dataset.y);
  
            // Remove ship from old position
            draggedShip.coords.forEach(([ox, oy]) => {
              this.player.gameboard.board[ox][oy] = null;
              const oldCell = board.querySelector(`[data-x="${ox}"][data-y="${oy}"]`);
              oldCell.classList.remove('ship');
            });
  
            // Try to place ship in new position
            if (this.player.gameboard.placeShip(draggedShip.ship, x, y, currentOrientation)) {
              this.displayShips();
            } else {
              // If placement fails, return ship to original position
              draggedShip.coords.forEach(([ox, oy]) => {
                this.player.gameboard.board[ox][oy] = draggedShip.ship;
              });
              this.displayShips();
            }
            draggedShip = null;
          }
        });
      });
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
        if(!isHit){
            this.currentPlayer=this.computer
            this.uiManager.updateTurnDisplay(this.currentPlayer.name)
            setTimeout(() => this.computerMove(), 1000);
        }
        else{
            this.setEventListeners()
        }
        
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
    if(!isHit){
    this.currentPlayer=this.player
    this.uiManager.updateTurnDisplay(this.currentPlayer.name)
  }
  else{
    setTimeout(() => this.computerMove(), 1000);
  }
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
