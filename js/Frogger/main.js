
import { Network } from './network.js';
import { TileMap } from './tilemap.js';
import { Sprite } from './sprite.js';

window.addEventListener('DOMContentLoaded', () => {
    // Get canvas and context
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    // Setup code:
    const readyButton = document.getElementById('readyButton');
    const network = new Network('Player', startGame, readyButton);
    network.connect('wss://frogger-server.onrender.com');

    //const tileMap = new TileMap(map01, tileSetImage);
    //const frogSprite = new Sprite(frogImage, 21, 21, 7);
    // initialize game
});

function startGame() {console.log('Game started!');}
