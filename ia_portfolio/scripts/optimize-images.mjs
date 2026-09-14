import sharp from 'sharp';
import { readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, '..', 'src', 'assets');
const MAX_WIDTH = 1600;

async function optimize(dir, file) {
  const filePath = path.join(dir, file);
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  const before = statSync(filePath).size;
  const buffer = await sharp(filePath)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .toBuffer();

  let output;
  if (ext === '.png') {
    output = await sharp(buffer).png({ quality: 80, compressionLevel: 9 }).toBuffer();
  } else {
    output = await sharp(buffer).jpeg({ quality: 80, mozjpeg: true }).toBuffer();
  }

  if (output.length < before) {
    await sharp(output).toFile(filePath + '.tmp');
    const { renameSync } = await import('node:fs');
    renameSync(filePath + '.tmp', filePath);
    const after = statSync(filePath).size;
    console.log(`${file}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`);
  } else {
    console.log(`${file}: sin cambios (ya optimizado)`);
  }
}

const targetDirs = ['images', 'tools', 'chatbots'].map((d) => path.join(assetsDir, d));
const rootFiles = readdirSync(assetsDir).filter((f) => statSync(path.join(assetsDir, f)).isFile());

for (const dir of targetDirs) {
  for (const file of readdirSync(dir)) {
    await optimize(dir, file);
  }
}
for (const file of rootFiles) {
  await optimize(assetsDir, file);
}
