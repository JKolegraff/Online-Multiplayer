export class GameObject {
  constructor(x = 0, y = 0) {
    // Local position relative to parent
    this.x = x;
    this.y = y;

    // Parent-child relationship
    this.parent = null;
    this.children = [];

    // Component system
    this.components = [];

    // Rendering and filtering
    this.layer = 0;
    this.tags = new Set();
    this.visible = true;

    // Optional collision handlers
    this.onCollisionEnter = null;
    this.onCollisionStay = null;
    this.onCollisionExit = null;
  }

  // ----- World Position -----
  get worldX() {
    return this.parent ? this.parent.worldX + this.x : this.x;
  }

  get worldY() {
    return this.parent ? this.parent.worldY + this.y : this.y;
  }

  // ----- Component Management -----
  addComponent(component) {
    component.parent = this;
    this.components.push(component);
  }

  getComponent(type) {
    return this.components.find(c => c instanceof type);
  }

  // ----- Tag Management -----
  addTag(tag) {
    this.tags.add(tag);
  }

  removeTag(tag) {
    this.tags.delete(tag);
  }

  hasTag(tag) {
    return this.tags.has(tag);
  }

  // ----- Children -----
  addChild(child) {
    child.parent = this;
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      child.parent = null;
      this.children.splice(index, 1);
    }
  }

  // ----- Update -----
update(deltaTime, context) {
  for (const c of this.components) {
    if (typeof c.update === 'function') {
      // Now passes camera to components that use it
      c.update(deltaTime, context);
    }
  }

  for (const child of this.children) {
    child.update(deltaTime, context);
  }
}

  // ----- Draw -----
  draw(ctx, context) {
    if (!this.visible) return;

    // Convert world position to screen space
    const screenPos = context.camera.worldToScreen(this.worldX, this.worldY);

    // Draw components
    for (const c of this.components) {
      if (typeof c.draw === 'function') {
        c.draw(ctx, screenPos.x, screenPos.y);
      }
    }

    // Draw children
    for (const child of this.children) {
      child.draw(ctx, context);
    }
  }
}
