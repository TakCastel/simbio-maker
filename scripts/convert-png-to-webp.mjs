/**
 * Convert all PNG in public/ to WebP and remove originals.
 * Run: node scripts/convert-png-to-webp.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

function* walkPng(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      yield* walkPng(full);
    } else if (e.name.endsWith('.png')) {
      yield full;
    }
  }
}

async function main() {
  const files = [...walkPng(publicDir)];
  console.log(`Converting ${files.length} PNG → WebP in public/`);
  for (const pngPath of files) {
    const webpPath = pngPath.replace(/\.png$/i, '.webp');
    await sharp(pngPath)
      .webp({ quality: 90 })
      .toFile(webpPath);
    fs.unlinkSync(pngPath);
    process.stdout.write('.');
  }
  console.log('\nDone.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
