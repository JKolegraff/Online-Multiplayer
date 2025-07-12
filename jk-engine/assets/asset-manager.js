export class AssetManager {
  constructor() {
    this.queue = { image: {}, sound: {}, font: {} };
    this.images = {};
    this.sounds = {};
    this.fonts = {};
  }

  addAsset(type, name, path) {
    if (!this.queue[type]) this.queue[type] = {};
    this.queue[type][name] = path;
  }

  async loadAll() {
    const promises = [];

    for (const [name, path] of Object.entries(this.queue.image)) {
      promises.push(new Promise((res, rej) => {
        const img = new Image();
        img.src = path;
        img.onload = () => { this.images[name] = img; res(); };
        img.onerror = () => rej(`Failed to load image: ${path}`);
      }));
    }

    for (const [name, path] of Object.entries(this.queue.sound)) {
      promises.push(new Promise((res, rej) => {
        const audio = new Audio();
        audio.src = path;
        audio.oncanplaythrough = () => { this.sounds[name] = audio; res(); };
        audio.onerror = () => rej(`Failed to load sound: ${path}`);
      }));
    }

    for (const [name, path] of Object.entries(this.queue.font)) {
      const font = new FontFace(name, `url(${path})`);
      promises.push(font.load().then(loaded => {
        document.fonts.add(loaded);
        this.fonts[name] = loaded;
      }));
    }

    await Promise.all(promises);
  }

  get(type, name) {
    if (type === 'image') return this.images[name];
    if (type === 'sound') return this.sounds[name];
    if (type === 'font') return this.fonts[name];
    return null;
  }
}

export async function loadAssets() {
  await assets.loadAll();
}
