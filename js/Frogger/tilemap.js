import { SpriteSheet } from './spritesheet.js';
import { TILEMAP_IMAGE_URL, TILE_SIZE, TILE_COUNT } from './config.js';

export class TileMap {
  constructor(mapData) {
    this.mapData = mapData;
    this.tilesetImage = new SpriteSheet(TILEMAP_IMAGE_URL, TILE_SIZE, TILE_SIZE, TILE_COUNT);
    this.ready = this.tilesetImage.loaded; // Promise to await loading
  }

  async draw(ctx, scale = 1) {
    await this.ready;

    for (let y = 0; y < this.mapData.length; y++) {
      for (let x = 0; x < this.mapData[y].length; x++) {
        const tileIndex = this.mapData[y][x];
        this.tilesetImage.drawFrame(ctx, tileIndex, x * TILE_SIZE * scale, y * TILE_SIZE * scale, scale);
      }
    }
  }
}
