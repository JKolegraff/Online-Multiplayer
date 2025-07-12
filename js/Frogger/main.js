
import { WS_URL } from './config.js';
import { Network } from './network.js';
import { TileMap } from './tilemap.js';
import { SpriteSheet } from './spritesheet.js';
import { Game } from './game.js';
//import { TILEMAP_IMAGE_URL, TILE_SIZE, TILE_COUNT } from './config.js';

let game;

window.addEventListener('DOMContentLoaded', () => {
    // Get canvas and context
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    // Setup code:
    const readyButton = document.getElementById('readyButton');
    const network = new Network('Player', startGame, readyButton);
    network.connect(WS_URL);
    //const tilesetImage = new SpriteSheet(TILEMAP_IMAGE_URL, TILE_SIZE, TILE_SIZE, TILE_COUNT);
    //tilesetImage.drawFrame(ctx, 0, 0, 0, 1);
    game = new Game(ctx);
    //const tileMap = new TileMap(map01, tileSetImage);
    //const frogSprite = new Sprite(frogImage, 21, 21, 7);
    // initialize game
    
});

function startGame() {
    console.log('Game started!');
    game.start();
}
