export class TileMapCollider {
    constructor(tiles, width, height, tileSize) {
      this.tiles = tiles;           // Flat array of Tile objects
      this.width = width;           // In tiles
      this.height = height;
      this.tileSize = tileSize;
    }
  
    init(parent) {
      this.parent = parent;         // The TileMap this is attached to
    }
  
    // World-space collision check
    isSolidAt(x, y) {
      const localX = x - this.parent.x;
      const localY = y - this.parent.y;
  
      const col = Math.floor(localX / this.tileSize);
      const row = Math.floor(localY / this.tileSize);
  
      if (col < 0 || row < 0 || col >= this.width || row >= this.height) return false;
  
      const tileIndex = row * this.width + col;
      const tile = this.tiles[tileIndex];
  
      return tile?.isCollidable ?? false;
    }
  
    // Optional: draw all collidable tiles for debugging
    draw(ctx) {
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 0, 0, 0.3)';
      for (const tile of this.tiles) {
        if (tile.isCollidable) {
          ctx.strokeRect(tile.x, tile.y, tile.size, tile.size);
        }
      }
      ctx.restore();
    }
  }
  