import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const source = path.join(root, 'src', 'assets', 'servicio1.jpeg');
const publicDir = path.join(root, 'public');

await sharp(source).resize(32, 32).toFile(path.join(publicDir, 'favicon-32.png'));
await sharp(source).resize(180, 180).toFile(path.join(publicDir, 'apple-touch-icon.png'));
await sharp(source).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(publicDir, 'og-image.jpg'));

console.log('Favicon, apple-touch-icon y og-image generados en public/');
