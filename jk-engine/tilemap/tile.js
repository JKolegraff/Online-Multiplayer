export class Tile {
    constructor(x, y, size, image, isCollidable = false) {
      this.x = x;                   // World X position
      this.y = y;                   // World Y position
      this.size = size;             // Width & height in pixels (usually square)
      this.image = image;           // Single frame from sprite sheet
      this.isCollidable = isCollidable; // Used by TileMapCollider
    }
  
    draw(ctx) {
      if (!this.image) return;
  
      ctx.drawImage(
        this.image,
        this.x,
        this.y,
        this.size,
        this.size
      );
    }
  }
  