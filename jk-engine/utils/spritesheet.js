/**
 * Slices a sprite sheet into equal-sized tiles and returns an array of canvases.
 * @param {HTMLImageElement} image - The full sprite sheet image.
 * @param {number} frameWidth - Width of each tile/frame.
 * @param {number} frameHeight - Height of each tile/frame.
 * @returns {HTMLCanvasElement[]} Array of sliced tile images.
 */
export function sliceSpriteSheet(image, frameWidth, frameHeight) {
  const frames = [];

  const cols = Math.floor(image.width / frameWidth);
  const rows = Math.floor(image.height / frameHeight);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const canvas = document.createElement('canvas');
      canvas.width = frameWidth;
      canvas.height = frameHeight;
      const ctx = canvas.getContext('2d');

      ctx.drawImage(
        image,
        x * frameWidth, y * frameHeight, frameWidth, frameHeight,
        0, 0, frameWidth, frameHeight
      );

      frames.push(canvas);
    }
  }

  return frames;
}
