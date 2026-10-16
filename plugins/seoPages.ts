import fs from "node:fs";
import path from "node:path";
import type { Plugin, ResolvedConfig } from "vite";
import {
  API_URL,
  LOCALES,
  SITE_URL,
  SITE_NAME,
  DEFAULT_LOCALE,
  getPageMeta,
  absoluteUrl,
  renderHeadBlock,
  type Locale,
  type SeoPage,
  type PageMeta,
  type BlogPostSeo,
} from "../src/seo/meta";

const START = "<!--seo:start-->";
const END = "<!--seo:end-->";

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const fetchPosts = async (): Promise<BlogPostSeo[]> => {
  try {
    const response = await fetch(`${API_URL}/api/posts?published=true`, {
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = (await response.json()) as { data?: BlogPostSeo[] };
    return payload.data ?? [];
  } catch (error) {
    console.warn(
      `[seo-pages] Blog maqolalarini yuklab bo'lmadi (${(error as Error).message}). ` +
        "Maqola sahifalari oldindan yaratilmaydi, ular brauzerda baribir ishlaydi."
    );
    return [];
  }
};

// <noscript> ichidagi oddiy matn: JavaScript'siz skanerlar ham sahifa nima haqida
// ekanini ko'ra oladi va boshqa sahifalarga havola topadi.
const renderNoscript = (meta: PageMeta, lang: Locale) => {
  const links = LOCALES.map(
    (code) => `<a href="/${code}${meta.path}">${code.toUpperCase()}</a>`
  ).join(" · ");

  return [
    "<noscript>",
    `<h1>${escapeHtml(SITE_NAME[lang])}</h1>`,
    `<p>${escapeHtml(meta.description)}</p>`,
    `<p>${links}</p>`,
    "</noscript>",
  ].join("");
};

const buildShell = (template: string, meta: PageMeta, lang: Locale) => {
  const head = `${START}\n    ${renderHeadBlock(meta)}\n    ${END}`;
  const startIndex = template.indexOf(START);
  const endIndex = template.indexOf(END);

  if (startIndex === -1 || endIndex === -1) {
    throw new Error("[seo-pages] index.html ichida <!--seo:start-->/<!--seo:end--> topilmadi");
  }

  return template
    .slice(0, startIndex)
    .concat(head, template.slice(endIndex + END.length))
    .replace(/<html lang="[^"]*" dir="[^"]*">/, `<html lang="${lang}" dir="${lang === "ar" ? "rtl" : "ltr"}">`)
    .replace("</body>", `${renderNoscript(meta, lang)}</body>`);
};

const lastmod = (value: string | undefined, fallback: string) => {
  const date = value ? new Date(value) : null;
  return date && !Number.isNaN(date.getTime()) ? date.toISOString().slice(0, 10) : fallback;
};

const sitemapEntry = (
  pathname: string,
  mod: string,
  priority: string,
  changefreq: string
) =>
  LOCALES.map((lang) => {
    const alternates = [...LOCALES, "x-default"]
      .map((code) => {
        const target = code === "x-default" ? DEFAULT_LOCALE : code;
        return `    <xhtml:link rel="alternate" hreflang="${code}" href="${absoluteUrl(`/${target}${pathname}`)}"/>`;
      })
      .join("\n");

    return [
      "  <url>",
      `    <loc>${absoluteUrl(`/${lang}${pathname}`)}</loc>`,
      alternates,
      `    <lastmod>${mod}</lastmod>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      "  </url>",
    ].join("\n");
  }).join("\n");

// Build vaqtida:
//  1) har bir til/sahifa uchun alohida statik HTML qobig'i yaratadi
//     (dist/uz/index.html, dist/ru/blog/index.html, dist/uz/blog/<slug>/index.html ...)
//     — to'g'ri title/description/canonical/hreflang/Open Graph/JSON-LD bilan;
//  2) to'liq sitemap.xml (blog maqolalari bilan) yozadi.
export default function seoPages(): Plugin {
  let config: ResolvedConfig;

  return {
    name: "seo-pages",

    configResolved(resolved) {
      config = resolved;
    },

    // index.html ichidagi <!--seo-head--> o'rniga standart (fallback) meta qo'yiladi
    transformIndexHtml: {
      order: "pre",
      handler(html) {
        const fallback = getPageMeta(DEFAULT_LOCALE, { type: "home" });
        return html.replace(
          "<!--seo-head-->",
          `${START}\n    ${renderHeadBlock(fallback, { minimal: true })}\n    ${END}`
        );
      },
    },

    async closeBundle() {
      if (config.command !== "build") return;

      const outDir = path.resolve(config.root, config.build.outDir);
      const templatePath = path.join(outDir, "index.html");
      if (!fs.existsSync(templatePath)) return;

      const template = fs.readFileSync(templatePath, "utf8");
      const posts = await fetchPosts();
      const today = new Date().toISOString().slice(0, 10);

      const write = (lang: Locale, subPath: string, page: SeoPage) => {
        const meta = getPageMeta(lang, page);
        const file = path.join(outDir, lang, subPath, "index.html");
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, buildShell(template, meta, lang));
      };

      for (const lang of LOCALES) {
        write(lang, "", { type: "home" });
        write(lang, "blog", { type: "blog" });
        for (const post of posts) {
          write(lang, path.join("blog", post.slug), { type: "post", slug: post.slug, post });
        }
      }

      const entries = [
        sitemapEntry("", today, "1.0", "weekly"),
        sitemapEntry("/blog", today, "0.8", "weekly"),
        ...posts.map((post) =>
          sitemapEntry(
            `/blog/${post.slug}`,
            lastmod(post.updatedAt ?? post.date, today),
            "0.6",
            "monthly"
          )
        ),
      ];

      const sitemap = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
        entries.join("\n"),
        "</urlset>",
        "",
      ].join("\n");

      fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemap);
      config.logger.info(
        `[seo-pages] ${LOCALES.length * (2 + posts.length)} ta statik sahifa va sitemap.xml yaratildi ` +
          `(${posts.length} ta blog maqolasi, ${SITE_URL})`
      );
    },
  };
}
