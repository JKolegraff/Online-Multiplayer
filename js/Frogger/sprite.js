export class Sprite {
    constructor(image, frameWidth, frameHeight, frameCount, frameSpeed = 100) {
      this.image = image;
      this.frameWidth = frameWidth;
      this.frameHeight = frameHeight;
      this.frameCount = frameCount;
      this.frameSpeed = frameSpeed;
  
      this.currentFrame = 0;
      this.lastUpdate = 0;
    }
  
    update(time) {
      if (time - this.lastUpdate > this.frameSpeed) {
        this.currentFrame = (this.currentFrame + 1) % this.frameCount;
        this.lastUpdate = time;
      }
    }
  
    draw(ctx, x, y, scale = 1) {
      ctx.drawImage(
        this.image,
        this.currentFrame * this.frameWidth, 0,
        this.frameWidth, this.frameHeight,
        x, y, this.frameWidth * scale, this.frameHeight * scale
      );
    }
  }
  