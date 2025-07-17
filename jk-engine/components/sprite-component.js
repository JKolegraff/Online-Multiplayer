export class SpriteComponent {
  constructor(image, width = null, height = null) {
    this.image = image;
    this.width = width ?? image?.width ?? 0;
    this.height = height ?? image?.height ?? 0;
  }

  draw(ctx, x, y) {
    if (this.image) {
      ctx.drawImage(this.image, x, y, this.width, this.height);
    }
  }
}
