export class GameObject {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    this.components = [];
    this.collidingWith = new Set();
    this.onCollide = null;
  }

  addComponent(component) {
    component.parent = this;
    this.components.push(component);
  }

  getComponent(type) {
    return this.components.find(c => c instanceof type);
  }

  update(deltaTime) {
    for (const c of this.components) c.update?.(deltaTime);
  }

  draw(ctx) {
    for (const c of this.components) c.draw?.(ctx);
  }
}
