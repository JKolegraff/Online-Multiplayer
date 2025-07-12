import { getObjects } from './engine.js';
import { ColliderComponent } from './collider-component.js';

export function handleCollisions() {
  const gameObjects = getObjects();

  for (let i = 0; i < gameObjects.length; i++) {
    const a = gameObjects[i];
    const aCollider = a.getComponent(ColliderComponent);
    if (!aCollider) continue;

    for (let j = i + 1; j < gameObjects.length; j++) {
      const b = gameObjects[j];
      const bCollider = b.getComponent(ColliderComponent);
      if (!bCollider) continue;

      const aBounds = aCollider.getBounds();
      const bBounds = bCollider.getBounds();

      const isColliding = rectIntersect(aBounds, bBounds);

      if (isColliding) {
        if (!a.collidingWith.has(b)) {
          a.onCollide?.(b);
          a.collidingWith.add(b);
        }
        if (!b.collidingWith.has(a)) {
          b.onCollide?.(a);
          b.collidingWith.add(a);
        }
      } else {
        a.collidingWith.delete(b);
        b.collidingWith.delete(a);
      }
    }
  }
}

export function checkCollision(movingObj, nextX, nextY) {
  const movingCollider = movingObj.getComponent(ColliderComponent);
  if (!movingCollider) return false;

  const nextBounds = {
    x: nextX,
    y: nextY,
    width: movingCollider.width,
    height: movingCollider.height
  };

  const gameObjects = getObjects();

  for (const obj of gameObjects) {
    if (obj === movingObj) continue;
    const otherCollider = obj.getComponent(ColliderComponent);
    if (!otherCollider) continue;
    const otherBounds = otherCollider.getBounds();
    if (rectIntersect(nextBounds, otherBounds)) {
      return obj;
    }
  }

  return null;
}

function rectIntersect(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}
