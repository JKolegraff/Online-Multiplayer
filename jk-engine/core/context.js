// core/context.js
import { camera } from './camera.js';
//import { mouse } from './input.js';
// import { keyboard } from './keyboard.js'; // if you use one

let canvasRef = null;

export function setCanvas(canvas) {
  canvasRef = canvas;
}

export function createContext() {
  return {
    camera,
    //mouse,
    // keyboard,
    screenWidth: canvasRef?.width || 0,
    screenHeight: canvasRef?.height || 0,
  };
}
