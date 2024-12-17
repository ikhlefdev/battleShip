/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const{Ship,GameBoard,Player}=__webpack_require__(/*! ./logic.js */ \"./src/logic.js\")\r\nconst player1=new Player('real')\r\nconst player2=new Player('real')\r\n\r\nconst ship1=new Ship(3)\r\nconst ship2=new Ship(5)\r\nconst ship3=new Ship(2)\r\nconst ship4=new Ship(3)\r\nplayer1.boardy.placeShip(ship1,0,0,'vertical')\r\nplayer1.boardy.placeShip(ship2,2,2,'horizontal')\r\n\r\nplayer2.boardy.placeShip(ship3,3,1,'vertical')  //verify lglba t3 x and y\r\nplayer2.boardy.placeShip(ship4,4,4,'vertical')\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxzQkFBc0IsQ0FBQyxtQkFBTyxDQUFDLGtDQUFZO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0e1NoaXAsR2FtZUJvYXJkLFBsYXllcn09cmVxdWlyZSgnLi9sb2dpYy5qcycpXHJcbmNvbnN0IHBsYXllcjE9bmV3IFBsYXllcigncmVhbCcpXHJcbmNvbnN0IHBsYXllcjI9bmV3IFBsYXllcigncmVhbCcpXHJcblxyXG5jb25zdCBzaGlwMT1uZXcgU2hpcCgzKVxyXG5jb25zdCBzaGlwMj1uZXcgU2hpcCg1KVxyXG5jb25zdCBzaGlwMz1uZXcgU2hpcCgyKVxyXG5jb25zdCBzaGlwND1uZXcgU2hpcCgzKVxyXG5wbGF5ZXIxLmJvYXJkeS5wbGFjZVNoaXAoc2hpcDEsMCwwLCd2ZXJ0aWNhbCcpXHJcbnBsYXllcjEuYm9hcmR5LnBsYWNlU2hpcChzaGlwMiwyLDIsJ2hvcml6b250YWwnKVxyXG5cclxucGxheWVyMi5ib2FyZHkucGxhY2VTaGlwKHNoaXAzLDMsMSwndmVydGljYWwnKSAgLy92ZXJpZnkgbGdsYmEgdDMgeCBhbmQgeVxyXG5wbGF5ZXIyLmJvYXJkeS5wbGFjZVNoaXAoc2hpcDQsNCw0LCd2ZXJ0aWNhbCcpXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((module) => {

eval("\r\n\r\nclass Ship {\r\n  constructor(length, hits) {\r\n    this.length = length;\r\n    this.hits = 0;\r\n  }\r\n  hit() {\r\n    this.hits++;\r\n  }\r\n  isSunk() {\r\n    if (this.length === this.hits) {\r\n      return true;\r\n    }\r\n    return false;\r\n  }\r\n}\r\nclass GameBoard {\r\n  constructor(board) {\r\n    // 10x10 grid filled with null or some default value\r\n    this.board = Array(10)\r\n      .fill(null)\r\n      .map(() => Array(10).fill(null));\r\n    this.missedShots=[]\r\n    this.ships=[]\r\n  }\r\n  validPlace(ship,x,y,pos){\r\n    if (pos === 'horizontal' && y + ship.length > 10) return false;\r\n    if (pos === 'vertical' && x + ship.length > 10) return false;\r\n     // Check if spaces are already occupied\r\n     for (let i = 0; i < ship.length; i++) {\r\n        if (pos === 'horizontal') {\r\n            if (this.board[x][y + i] !== null) return false;\r\n        } else if (pos === 'vertical') {\r\n            if (this.board[x + i][y] !== null) return false;\r\n        }\r\n    }\r\n    return true\r\n  }\r\n  placeShip(ship, x, y, pos) {\r\n     if (this.validPlace(ship, x, y, pos)===true){\r\n        for (let i = 0; i < ship.length; i++) {\r\n            if (pos === 'horizontal') {\r\n                this.board[x][y + i] =ship;\r\n            } else if (pos === 'vertical') {\r\n                this.board[x + i][y]=ship;\r\n            }\r\n     }\r\n     this.ships.push(ship)\r\n     return true \r\n  }\r\n  return false\r\n}\r\n  receiveAttack(x, y) {\r\n     if (x<10 && y<10 && x>=0 && y>=0){\r\n     if(this.board[x][y]===null){\r\n        this.missedShots.push([x,y])\r\n        this.getMissedShots()\r\n     }\r\n     else {\r\n        this.board[x][y].hit()\r\n     }\r\n    }\r\n     return false\r\n  }\r\n  getMissedShots() {\r\n    return this.missedShots \r\n  }\r\n  allShipsSunk(){\r\n    return this.ships.every(ship => ship.isSunk());\r\n  }\r\n}\r\nclass Player{\r\n     constructor(type){\r\n        this.type=type //real or computer\r\n        this.boardy=new GameBoard() \r\n     }\r\n     makeMove(x,y,opponentBoard){\r\n     if (this.type === 'real') {\r\n        // Validate and perform move for real player\r\n        return opponentBoard.receiveAttack(x, y);\r\n      } else if (this.type === 'computer') {\r\n        // Generate random valid moves for computer\r\n        let move;\r\n        do {\r\n          const randX = Math.floor(Math.random() * 10);\r\n          const randY = Math.floor(Math.random() * 10);\r\n          move = opponentBoard.receiveAttack(randX, randY);\r\n        } while (!move); // Retry if the move was invalid or redundant\r\n        return move;\r\n      }\r\n    }\r\n}\r\n\r\nmodule.exports = { Ship, GameBoard,Player };\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9naWMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGVBQWU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbG9naWMuanM/YzY2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNsYXNzIFNoaXAge1xyXG4gIGNvbnN0cnVjdG9yKGxlbmd0aCwgaGl0cykge1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICB0aGlzLmhpdHMgPSAwO1xyXG4gIH1cclxuICBoaXQoKSB7XHJcbiAgICB0aGlzLmhpdHMrKztcclxuICB9XHJcbiAgaXNTdW5rKCkge1xyXG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLmhpdHMpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbmNsYXNzIEdhbWVCb2FyZCB7XHJcbiAgY29uc3RydWN0b3IoYm9hcmQpIHtcclxuICAgIC8vIDEweDEwIGdyaWQgZmlsbGVkIHdpdGggbnVsbCBvciBzb21lIGRlZmF1bHQgdmFsdWVcclxuICAgIHRoaXMuYm9hcmQgPSBBcnJheSgxMClcclxuICAgICAgLmZpbGwobnVsbClcclxuICAgICAgLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbChudWxsKSk7XHJcbiAgICB0aGlzLm1pc3NlZFNob3RzPVtdXHJcbiAgICB0aGlzLnNoaXBzPVtdXHJcbiAgfVxyXG4gIHZhbGlkUGxhY2Uoc2hpcCx4LHkscG9zKXtcclxuICAgIGlmIChwb3MgPT09ICdob3Jpem9udGFsJyAmJiB5ICsgc2hpcC5sZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKHBvcyA9PT0gJ3ZlcnRpY2FsJyAmJiB4ICsgc2hpcC5sZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgIC8vIENoZWNrIGlmIHNwYWNlcyBhcmUgYWxyZWFkeSBvY2N1cGllZFxyXG4gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChwb3MgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFt4XVt5ICsgaV0gIT09IG51bGwpIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBvcyA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFt4ICsgaV1beV0gIT09IG51bGwpIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICBwbGFjZVNoaXAoc2hpcCwgeCwgeSwgcG9zKSB7XHJcbiAgICAgaWYgKHRoaXMudmFsaWRQbGFjZShzaGlwLCB4LCB5LCBwb3MpPT09dHJ1ZSl7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChwb3MgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5ICsgaV0gPXNoaXA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocG9zID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ggKyBpXVt5XT1zaGlwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgfVxyXG4gICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKVxyXG4gICAgIHJldHVybiB0cnVlIFxyXG4gIH1cclxuICByZXR1cm4gZmFsc2VcclxufVxyXG4gIHJlY2VpdmVBdHRhY2soeCwgeSkge1xyXG4gICAgIGlmICh4PDEwICYmIHk8MTAgJiYgeD49MCAmJiB5Pj0wKXtcclxuICAgICBpZih0aGlzLmJvYXJkW3hdW3ldPT09bnVsbCl7XHJcbiAgICAgICAgdGhpcy5taXNzZWRTaG90cy5wdXNoKFt4LHldKVxyXG4gICAgICAgIHRoaXMuZ2V0TWlzc2VkU2hvdHMoKVxyXG4gICAgIH1cclxuICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmJvYXJkW3hdW3ldLmhpdCgpXHJcbiAgICAgfVxyXG4gICAgfVxyXG4gICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICBnZXRNaXNzZWRTaG90cygpIHtcclxuICAgIHJldHVybiB0aGlzLm1pc3NlZFNob3RzIFxyXG4gIH1cclxuICBhbGxTaGlwc1N1bmsoKXtcclxuICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KHNoaXAgPT4gc2hpcC5pc1N1bmsoKSk7XHJcbiAgfVxyXG59XHJcbmNsYXNzIFBsYXllcntcclxuICAgICBjb25zdHJ1Y3Rvcih0eXBlKXtcclxuICAgICAgICB0aGlzLnR5cGU9dHlwZSAvL3JlYWwgb3IgY29tcHV0ZXJcclxuICAgICAgICB0aGlzLmJvYXJkeT1uZXcgR2FtZUJvYXJkKCkgXHJcbiAgICAgfVxyXG4gICAgIG1ha2VNb3ZlKHgseSxvcHBvbmVudEJvYXJkKXtcclxuICAgICBpZiAodGhpcy50eXBlID09PSAncmVhbCcpIHtcclxuICAgICAgICAvLyBWYWxpZGF0ZSBhbmQgcGVyZm9ybSBtb3ZlIGZvciByZWFsIHBsYXllclxyXG4gICAgICAgIHJldHVybiBvcHBvbmVudEJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnY29tcHV0ZXInKSB7XHJcbiAgICAgICAgLy8gR2VuZXJhdGUgcmFuZG9tIHZhbGlkIG1vdmVzIGZvciBjb21wdXRlclxyXG4gICAgICAgIGxldCBtb3ZlO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgIGNvbnN0IHJhbmRYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgICAgY29uc3QgcmFuZFkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgICBtb3ZlID0gb3Bwb25lbnRCb2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRYLCByYW5kWSk7XHJcbiAgICAgICAgfSB3aGlsZSAoIW1vdmUpOyAvLyBSZXRyeSBpZiB0aGUgbW92ZSB3YXMgaW52YWxpZCBvciByZWR1bmRhbnRcclxuICAgICAgICByZXR1cm4gbW92ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgU2hpcCwgR2FtZUJvYXJkLFBsYXllciB9O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/logic.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;