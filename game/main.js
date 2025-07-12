// main.js

import { assets } from '../jk-engine/assets/assets.js';
import { loadAssets } from '../jk-engine/assets/asset-manager.js';
//import { initEngine, addObject } from '../jk-engine/engine.js';
//import { GameObject } from '../jk-engine/gameobject.js';
//import { SpriteComponent } from '../jk-engine/sprite-component.js';

async function main() {
  // Step 1: Register assets
  assets.addAsset('image', 'tilemap', '../assets/images/SS_Tilemap.jpg');

  // Step 2: Load all registered assets
  await loadAssets();

  // Step 3: Initialize engine with canvas ID
  initEngine('gameCanvas');

  // Step 4: Create a player GameObject and add components
  //const player = new GameObject(100, 100);
  //player.onCollisionEnter = (other) => {
  //  console.log('Player collided with:', other);
  //};

  //const playerSprite = new SpriteComponent(assets.get('image', 'player'), 64, 64);
  //player.addComponent(playerSprite);

  //addObject(player);
}

// Start the game after window loads
window.addEventListener('load', main);
