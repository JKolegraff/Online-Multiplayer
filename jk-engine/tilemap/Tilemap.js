import { GameObject } from '../gameobject.js';
import { Tile } from './Tile.js';
import { TileMapCollider } from '../Collision/tilemapcollider.js';
import { sliceSpriteSheet } from '../utils/spritesheet.js';

export class TileMap extends GameObject {
  constructor({
    mapData,
    mapWidth,
    mapHeight,
    tileSize,
    spriteSheet,
    frameIndex = 1,
    frameWidth = 64,
    frameHeight = 64,
    collisionTileIndices = [],
  }) {
    super();

    this.tileSize = tileSize;
    this.mapWidth = mapWidth;
    this.mapHeight = mapHeight;
    this.mapData = mapData; // 2D array: [row][col]
    this.spriteSheet = spriteSheet;
    this.frameIndex = frameIndex;
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;

    this.collisionTileIndices = new Set(collisionTileIndices);
    //this.tileImages = sliceSpriteSheet(spriteSheet, tileSize, tileSize);
    this.tiles = [];

    this.buildMap();

    // Attach collider component if needed
    if (this.collisionTileIndices.size > 0) {
      const collider = new TileMapCollider(this.tiles, mapWidth, mapHeight, tileSize);
      this.addComponent(collider);
    }
  }

  buildMap() {
    this.tiles = [];

    for (let row = 0; row < this.mapHeight; row++) {
      for (let col = 0; col < this.mapWidth; col++) {
        const tileIndex = this.mapData[row][col];
        const x = this.x + col * this.frameWidth;
        const y = this.y + row * this.frameHeight;

        //const image = this.tileImages[tileIndex];
        const image = this.spriteSheet;
        const isCollidable = this.collisionTileIndices.has(tileIndex);

        const tile = new Tile(x, y, this.tileSize, image, tileIndex, this.frameWidth, this.frameHeight, isCollidable);
        this.tiles.push(tile);
      }
    }
  }

  draw(ctx, context) {
    this.tiles.forEach(tile => tile.draw(ctx, context));
  }
}
