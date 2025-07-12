export class SpriteSheet {
    constructor(src, frameWidth, frameHeight, maxFrames) {
      this.src = src;
      this.frameWidth = frameWidth;
      this.frameHeight = frameHeight;
      this.maxFrames = maxFrames;
  
      this.image = new Image();
      this.image.src = src;
  
      this.loaded = new Promise((resolve, reject) => {
        this.image.onload = () => resolve(this.image);
        this.image.onerror = reject;
      });
    }
  
    getFrame(index) {
      if (index >= this.maxFrames) {
        console.warn(`Frame ${index} out of range`);
        index = index % this.maxFrames;
      }
  
      return {
        image: this.image,
        sx: index * this.frameWidth,
        sy: 0,
        sw: this.frameWidth,
        sh: this.frameHeight
      };
    }
  
    drawFrame(ctx, index, dx, dy, scale = 1) {
      const frame = this.getFrame(index);
      ctx.drawImage(
        frame.image,
        frame.sx, frame.sy, frame.sw, frame.sh,
        dx, dy,
        frame.sw * scale, frame.sh * scale
      );
    }
  }
  