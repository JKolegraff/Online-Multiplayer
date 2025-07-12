export class ColliderComponent {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getBounds() {
    return {
      x: this.parent.x,
      y: this.parent.y,
      width: this.width,
      height: this.height
    };
  }
}
