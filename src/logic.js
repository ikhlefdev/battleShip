class Ship{
    constructor(length,hits,sunk,position){
        this.length=length
        this.hits=0
        this.sunk=false
        this.position=position
    }
    hit(){
        this.hits++
    }
    isSunk(length,hits){
        if(this.length===this.hits){
            this.sunk=true
        }
    }
}
class GameBoard{
    constructor(){
        board=new Array(10)
    }
}


module.exports={Ship,GameBoard}