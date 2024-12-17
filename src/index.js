import { GameController } from './helpers/gameController';


document.addEventListener('DOMContentLoaded', () => {
    const game = new GameController();
    game.initGame();
});