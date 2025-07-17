import { setCanvas, createContext } from './context.js ';

let canvas, ctx;
let gameObjects = [];
let lastTime = 0;

export function initEngine(canvasId) {
  canvas = document.getElementById(canvasId);
  ctx = canvas.getContext("2d");
  console.log('Engine initialized with canvas:', canvasId);
  
  //Set the canvas reference in context
  setCanvas(canvas);

  requestAnimationFrame(gameLoop);
}

export function addObject(obj) {
  gameObjects.push(obj);
  console.log('Object added');
}

export function getObjects() {
  return gameObjects;
}

function gameLoop(timestamp) {
  const deltaTime = (timestamp - lastTime) / 1000;
  lastTime = timestamp;

  // Set the canvas reference in context
  const context = new createContext();

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const obj of gameObjects) {
    obj.update?.(deltaTime, context);
  }

  //handleCollisions();

  for (const obj of gameObjects) {
    obj.draw?.(ctx, context);
  }
//console.log('Game loop running at', timestamp);
  requestAnimationFrame(gameLoop);
}

//import { handleCollisions } from './collision-manager.js';
