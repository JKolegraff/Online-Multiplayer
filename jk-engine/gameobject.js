export class GameObject {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;

    this.components = [];

    // Rendering and filtering
    this.layer = 0;          // Lower = drawn earlier (background)
    this.tags = new Set();   // For filtering by tag
    this.visible = true;     // Optional visibility flag

    // Optional collision handlers (called by ColliderComponent)
    this.onCollisionEnter = null;
    this.onCollisionStay = null;
    this.onCollisionExit = null;
  }

  addComponent(component) {
    component.parent = this;
    this.components.push(component);
  }

  getComponent(type) {
    return this.components.find(c => c instanceof type);
  }

  addTag(tag) {
    this.tags.add(tag);
  }

  removeTag(tag) {
    this.tags.delete(tag);
  }

  hasTag(tag) {
    return this.tags.has(tag);
  }

  update(deltaTime) {
    for (const c of this.components) {
      if (typeof c.update === 'function') {
        c.update(deltaTime);
      }
    }
  }

  draw(ctx) {
    if (!this.visible) return;
    for (const c of this.components) {
      if (typeof c.draw === 'function') {
        c.draw(ctx);
      }
    }
  }
}
