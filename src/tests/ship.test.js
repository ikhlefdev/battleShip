

import { Ship } from "../factories/ship";
// ship.test.js
describe('ship testing',()=>{
test('Ship should have a length', () => {
    const ship = new Ship(4);
    expect(ship.length).toBe(4);
});

test('Ship should start with 0 hits', () => {
    const ship = new Ship(4);
    expect(ship.hits).toBe(0);
});

test('hit() function should increase number of hits', () => {
    const ship = new Ship(3);
    ship.hit();
    expect(ship.hits).toBe(1);
});

test('Ship should not be sunk initially', () => {
    const ship = new Ship(3);
    expect(ship.isSunk()).toBe(false);
});

test('Ship should be sunk when hits equal length', () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
})
});


