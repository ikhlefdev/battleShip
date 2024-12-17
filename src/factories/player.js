import { GameBoard } from "./board"

export class Player{
    constructor(name,isComputer=false){
       this.name=name
       this.isComputer=isComputer
       this.movesMade=[]
       this.gameboard=new GameBoard()
    }
    attack(opponentBoard,x,y){
        if (this.movesMade.some(move => move.x === x && move.y === y)) {
            console.log("Already attacked this coordinate!");
          }
          this.movesMade.push([x,y]);
          return opponentBoard.receiveAttack(x, y);
    }
    randomAttack(opponentBoard){
        let x,y 
        do {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
          } while (this.movesMade.some(move => move.x === x && move.y === y));
          return this.attack(opponentBoard, x, y);
    }

}