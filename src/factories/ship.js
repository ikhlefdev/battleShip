export class Ship {
    constructor(length, hits) {
      this.length = length;
      this.hits = 0;
      
    }
    hit() {
          this.hits++;
      
  }
  
    isSunk() {
      if (this.length === this.hits) {
        return true;
      }
      return false;
    }
   
  }