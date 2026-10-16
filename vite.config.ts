import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import seoPages from "./plugins/seoPages";

const IMAGE_RE = /\.(png|jpe?g|svg|webp|gif|avif)$/i;

// PNG / JPEG / SVG fayllaridan o'lchamni o'qiydi (qo'shimcha kutubxonasiz).
const readSize = (file: string, buf: Buffer) => {
  const ext = path.extname(file).toLowerCase();

  if (ext === ".png" && buf.length > 24) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }

  if (ext === ".jpg" || ext === ".jpeg") {
    let i = 2;
    while (i < buf.length) {
      if (buf[i] !== 0xff) {
        i++;
        continue;
      }
      const marker = buf[i + 1];
      if (
        marker >= 0xc0 &&
        marker <= 0xcf &&
        marker !== 0xc4 &&
        marker !== 0xc8 &&
        marker !== 0xcc
      ) {
        return { width: buf.readUInt16BE(i + 7), height: buf.readUInt16BE(i + 5) };
      }
      i += 2 + buf.readUInt16BE(i + 2);
    }
  }

  if (ext === ".svg") {
    const text = buf.toString("utf8");
    const viewBox = text.match(/viewBox=["']([\d.\s-]+)["']/);
    if (viewBox) {
      const [, , w, h] = viewBox[1].trim().split(/\s+/).map(Number);
      if (w && h) return { width: w, height: h };
    }
    const w = text.match(/<svg[^>]*\swidth=["']([\d.]+)/);
    const h = text.match(/<svg[^>]*\sheight=["']([\d.]+)/);
    if (w && h) return { width: Number(w[1]), height: Number(h[1]) };
  }

  return { width: 0, height: 0 };
};

// Next.js'dagi kabi: `import img from "./a.png"` -> { src, width, height }.
// Shu tufayli `img.src` va `<Image src={img} />` kodlari o'zgarishsiz ishlaydi.
const staticImageImports = (): Plugin => ({
  name: "static-image-imports",
  enforce: "pre",
  load(id) {
    if (id.includes("?") || !IMAGE_RE.test(id) || id.includes("/public/")) return null;
    const { width, height } = readSize(id, fs.readFileSync(id));
    return [
      `import src from ${JSON.stringify(`${id}?url`)};`,
      `export default { src, width: ${width}, height: ${height} };`,
    ].join("\n");
  },
});

export default defineConfig({
  plugins: [staticImageImports(), react(), seoPages()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  server: { port: 3000 },
});
