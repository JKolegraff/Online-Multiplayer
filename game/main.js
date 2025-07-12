import { assets } from '../jk-engine/assets.js';
import { GameObject } from '../jk-engine/gameobject.js';
import { SpriteComponent } from '../jk-engine/sprite-component.js';
import { addObject, initEngine } from '../jk-engine/engine.js';
import { loadAssets } from '../jk-engine/asset-manager.js';

window.onload = async () => {
  assets.addAsset('image', 'player', './assets/images/player.png');
  await loadAssets();
  initEngine('gameCanvas');

  const player = new GameObject(100, 100);
  player.onCollide = (other) => {
    console.log('Player collided with:', other);
  };

  player.addComponent(new SpriteComponent(assets.get('image', 'player'), 64, 64));
  addObject(player);
};
