const{Ship,GameBoard,Player}=require('./logic.js')
const player1=new Player('real')
const player2=new Player('real')

const ship1=new Ship(3)
const ship2=new Ship(5)
const ship3=new Ship(2)
const ship4=new Ship(3)
player1.boardy.placeShip(ship1,0,0,'vertical')
player1.boardy.placeShip(ship2,2,2,'horizontal')

player2.boardy.placeShip(ship3,3,1,'vertical')  //verify lglba t3 x and y
player2.boardy.placeShip(ship4,4,4,'vertical')

