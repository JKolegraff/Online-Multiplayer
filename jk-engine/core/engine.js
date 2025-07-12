let canvas, ctx;
let gameObjects = [];
let lastTime = 0;

export function initEngine(canvasId) {
  canvas = document.getElementById(canvasId);
  ctx = canvas.getContext("2d");
  requestAnimationFrame(gameLoop);
}

export function addObject(obj) {
  gameObjects.push(obj);
}

export function getObjects() {
  return gameObjects;
}

function gameLoop(timestamp) {
  const deltaTime = (timestamp - lastTime) / 1000;
  lastTime = timestamp;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const obj of gameObjects) {
    obj.update?.(deltaTime);
  }

  handleCollisions();

  for (const obj of gameObjects) {
    obj.draw?.(ctx);
  }

  requestAnimationFrame(gameLoop);
}

import { handleCollisions } from './collision-manager.js';
