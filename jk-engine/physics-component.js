import { checkCollision } from './collision-manager.js';

export class PhysicsComponent {
  constructor() {
    this.vx = 0;
    this.vy = 0;
  }

  update(dt) {
    const nextX = this.parent.x + this.vx * dt;
    const nextY = this.parent.y + this.vy * dt;

    const collided = checkCollision(this.parent, nextX, nextY);

    if (!collided) {
      this.parent.x = nextX;
      this.parent.y = nextY;
    } else {
      this.vx = 0;
      this.vy = 0;
    }
  }
}
