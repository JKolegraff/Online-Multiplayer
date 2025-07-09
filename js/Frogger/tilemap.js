export class TileMap {
    constructor(mapData, tilesetImage, tileSize = 20) {
      this.mapData = mapData;
      this.tilesetImage = tilesetImage;
      this.tileSize = tileSize;
    }
  
    draw(ctx) {
      for (let y = 0; y < this.mapData.length; y++) {
        for (let x = 0; x < this.mapData[y].length; x++) {
          const tileIndex = this.mapData[y][x];
          ctx.drawImage(
            this.tilesetImage,
            tileIndex * this.tileSize, 0,
            this.tileSize, this.tileSize,
            x * this.tileSize, y * this.tileSize,
            this.tileSize, this.tileSize
          );
        }
      }
    }
  }
  