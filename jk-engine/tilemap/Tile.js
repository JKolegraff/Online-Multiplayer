export class Tile {
  constructor(x, y, drawSize, spriteSheet, frameIndex, frameWidth, frameHeight, isCollidable = false) {
    this.x = x;                         // World X position
    this.y = y;                         // World Y position
    this.drawSize = drawSize;           // Size to draw on screen (can scale from frame size)
    this.spriteSheet = spriteSheet;     // Full image
    this.frameIndex = frameIndex;       // Index of the tile frame in the sheet
    this.frameWidth = frameWidth;       // Width of a frame in the sheet
    this.frameHeight = frameHeight;     // Height of a frame
    this.isCollidable = isCollidable;   // Collision flag
  }

  draw(ctx, context) {
    if (!this.spriteSheet) return;

    const cam = context?.camera;
    const screenPos = cam?.worldToScreen
      ? cam.worldToScreen(this.x, this.y)
      : { x: this.x, y: this.y };

    const frameCount = Math.floor(this.spriteSheet.width / this.spriteSheet.height);
    const cols = Math.floor(this.spriteSheet.width / frameCount);
    const rows = this.spriteSheet.height;
    const sx = this.frameIndex * cols;
    const sy = 0;
//console.log("draw:", this.frameIndex, sx, sy, cols, rows, frameCount, this.spriteSheet.width, this.frameWidth);
    ctx.drawImage(
      this.spriteSheet,     // image source
      sx, sy,               // source x, y in spritesheet
      cols,      // source width
      rows,     // source height
      screenPos.x,          // destination x
      screenPos.y,          // destination y
      this.frameWidth,        // draw width
      this.frameHeight         // draw height
    );
  }
}
