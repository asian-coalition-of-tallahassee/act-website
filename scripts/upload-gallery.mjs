import { v2 as cloudinary } from "cloudinary";
import sharp from "sharp";
import fs from "fs";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

// Load .env.local
const env = Object.fromEntries(
  fs.readFileSync(path.join(ROOT, ".env.local"), "utf8")
    .split("\n")
    .filter((line) => line.includes("="))
    .map((line) => {
      const [key, ...rest] = line.split("=");
      return [key.trim(), rest.join("=").trim()];
    })
);

cloudinary.config({
  cloud_name: env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
});

const GALLERY_DIR = path.join(ROOT, "public", "gallery");
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];
const MAX_WIDTH = 2400;
const JPEG_QUALITY = 85;

async function compress(filePath) {
  const tmpPath = path.join(os.tmpdir(), `act-gallery-${Date.now()}-${path.basename(filePath)}`);
  await sharp(filePath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: JPEG_QUALITY })
    .toFile(tmpPath);
  return tmpPath;
}

async function run() {
  if (!fs.existsSync(GALLERY_DIR)) {
    console.error("No public/gallery folder found. Create it and add year subfolders.");
    process.exit(1);
  }

  const photos = [];

  const years = fs
    .readdirSync(GALLERY_DIR)
    .filter((f) => fs.statSync(path.join(GALLERY_DIR, f)).isDirectory())
    .sort((a, b) => b - a);

  if (years.length === 0) {
    console.error("No year folders found. Expected: public/gallery/2025/photo.jpg");
    process.exit(1);
  }

  for (const year of years) {
    const yearDir = path.join(GALLERY_DIR, year);
    const files = fs
      .readdirSync(yearDir)
      .filter((f) => IMAGE_EXTENSIONS.includes(path.extname(f).toLowerCase()));

    console.log(`\n📁 ${year} — ${files.length} image(s)`);

    for (const file of files) {
      const filePath = path.join(yearDir, file);
      const baseName = path.basename(file, path.extname(file));
      const publicId = `act/gallery/${year}/${baseName}`;

      process.stdout.write(`  ${file}... `);

      let tmpPath = null;
      try {
        tmpPath = await compress(filePath);
        const result = await cloudinary.uploader.upload(tmpPath, {
          public_id: publicId,
          overwrite: false,
        });

        photos.push({
          publicId: result.public_id,
          alt: `Experience Asia ${year}`,
          year: parseInt(year),
          event: `Experience Asia ${year}`,
        });

        console.log("✓");
      } catch (err) {
        console.log(`✗ ${err.message}`);
      } finally {
        if (tmpPath && fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
      }
    }
  }

  // Write photos array back into GalleryClient.tsx
  const clientPath = path.join(ROOT, "app", "components", "GalleryClient.tsx");
  let content = fs.readFileSync(clientPath, "utf8");

  const indent = "  ";
  const photosJson =
    "[\n" +
    photos.map((p) => indent + indent + JSON.stringify(p)).join(",\n") +
    "\n" + indent + "]";

  content = content.replace(
    /const photos: GalleryPhoto\[\] = \[[\s\S]*?\];/,
    `const photos: GalleryPhoto[] = ${photosJson};`
  );

  fs.writeFileSync(clientPath, content);
  console.log(`\n✓ Done — ${photos.length} photo(s) written to GalleryClient.tsx`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
