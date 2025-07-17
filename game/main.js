// main.js

import { assets, loadAssets } from '../jk-engine/assets/assets.js';
//import { loadAssets } from '../jk-engine/assets/asset-manager.js';
import { initEngine, addObject } from '../jk-engine/core/engine.js';
import { GameObject } from '../jk-engine/gameobject.js';
import { SpriteComponent } from '../jk-engine/components/sprite-component.js';
import { TileMap } from '../jk-engine/Tilemap/Tilemap.js';
import { map01 } from './map.js';


async function main() {
  console.log('Starting game initialization...');
  assets.addAsset('image', 'tilemap', '../assets/images/SS_Tilemap.jpg');
  await loadAssets();
  initEngine('gameCanvas');

  // TEMP: Just confirm this works
  console.log('Engine started, assets loaded');

  // Step 4: Create a player GameObject and add components
  const player = new GameObject(100, 100);
  //player.onCollisionEnter = (other) => {
  //  console.log('Player collided with:', other);
  //};

  const playerSprite = new SpriteComponent(assets.get('image', 'tilemap'));
  player.addComponent(playerSprite);

  addObject(player);
  //console.log('Player object added to the game');

  //console.log('image assest:', assets.get('image', 'tilemap'));
  /*const tilemap = new TileMap({
    mapData: map01,
    mapWidth: 11,
    mapHeight: 9, 
    tileSize: 200,
    spriteSheet: assets.get('image', 'tilemap'),
    collisionTileIndices: null});

    tilemap.buildMap();
    console.log('Built tilemap');
    addObject(tilemap);*/
}


console.log('Main script loaded');
// Start the game after window loads
window.addEventListener('load', main);


