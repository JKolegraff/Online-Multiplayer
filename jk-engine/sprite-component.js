export class SpriteComponent {
  constructor(image, width, height) {
    this.image = image;
    this.width = width;
    this.height = height;
  }

  draw(ctx) {
    if (this.image && this.parent) {
      ctx.drawImage(this.image, this.parent.x, this.parent.y, this.width, this.height);
    }
  }
}
