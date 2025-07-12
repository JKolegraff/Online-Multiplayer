import { map01 } from './map.js';
import { TileMap } from './tilemap.js';

export class Game {
    constructor(ctx) {
      this.ctx = ctx;
      //this.assets = assets; // sprites, tilemap, etc.
      this.map = new TileMap(map01);
      this.running = false;
  
      this.lastTime = 0;
    }
  
    start() {
      this.running = true;
      requestAnimationFrame(this.loop.bind(this));
    }
  
    loop(timestamp) {
      if (!this.running) return;
  
      const deltaTime = timestamp - this.lastTime;
      this.lastTime = timestamp;
  
      this.update(deltaTime);
      this.draw();
  
      requestAnimationFrame(this.loop.bind(this));
    }
  
    update(deltaTime) {
      // Update game logic: player, enemies, etc.
    }
  
    draw() {
      this.ctx.clearRect(0, 0, 420, 420);
      // Draw map, player, etc.
      this.map.draw(this.ctx, .2);
      // this.assets.tileMap.draw(this.ctx);
      // this.assets.frogSprite.draw(this.ctx, x, y);
    }
  
    stop() {
      this.running = false;
    }
  }
  