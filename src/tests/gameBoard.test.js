
import { GameBoard } from "../factories/board";
// GameBoard.test.js
describe('game board testing',()=>{
    test('Can place ship at specific coordinates', () => {
        const board = new GameBoard();
        const ship = new Ship(3);
        expect(board.placeShip(ship, 0, 0, 'horizontal')).toBe(true);
    });
    
    test('Cannot place ship outside of board', () => {
        const board = new GameBoard();
        const ship = new Ship(3);
        expect(board.placeShip(ship, 9, 9, 'horizontal')).toBe(false);
    });
    
    test('receiveAttack() records missed shot', () => {
        const board = new GameBoard();
        board.receiveAttack(5, 5);
        expect(board.getMissedShots()).toContainEqual([5, 5]);
    });
    
    test('receiveAttack() registers hit on ship', () => {
        const board = new GameBoard();
        const ship = new Ship(3);
        board.placeShip(ship, 0, 0, 'vertical');
        board.receiveAttack(0, 0);
        board.receiveAttack(1, 0);
        board.receiveAttack(2, 0);
        expect(ship.hits).toBe(3);
        expect(board.allShipsSunk()).toBe(true);
    });
    
    
    
    }) 