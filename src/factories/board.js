import { Ship } from "./ship";
export class GameBoard {
    constructor(board) {
      // 10x10 grid filled with null or some default value
      this.board = Array(10)
        .fill(null)
        .map(() => Array(10).fill(null));
        this.missedShots = []
      this.ships=[]
     
      
    }
    validPlace(ship,x,y,pos){
      if (pos === 'horizontal' && y + ship.length > 10) return false;
      if (pos === 'vertical' && x + ship.length > 10) return false;
       // Check if spaces are already occupied
       for (let i = 0; i < ship.length; i++) {
          if (pos === 'horizontal') {
              if (this.board[x][y + i] !== null) return false;
          } else if (pos === 'vertical') {
              if (this.board[x + i][y] !== null) return false;
          }
      }
      return true
    }
    placeShip(ship, x, y, pos) {
      if (this.validPlace(ship, x, y, pos)) {
        const shipCordinates=[]
        for (let i = 0; i < ship.length; i++) {
            const posX = pos === 'horizontal' ? x : x + i;
            const posY = pos === 'horizontal' ? y + i : y;
            this.board[posX][posY] = ship;
            shipCordinates.push([posX,posY])

        }
        this.ships.push(ship);
        return true;
    }
    return false;
  }
    receiveAttack(x, y) {
      if (x < 10 && y < 10 && x >= 0 && y >= 0) {
        const cell = this.board[x][y];
        const hitPositions=[]
        if (cell === null) {
            this.missedShots.push([x,y])
            return false;
        } else {
            cell.hit()
            hitPositions.push(cell)
            return true;
        }
    }
    return false;
    }
   
    allShipsSunk(){
      return this.ships.every(ship => ship.isSunk());
    }
  }