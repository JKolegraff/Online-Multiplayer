import { AssetManager } from './asset-manager.js';

export const assets = new AssetManager();

export async function loadAssets() {
  await assets.loadAll();
}