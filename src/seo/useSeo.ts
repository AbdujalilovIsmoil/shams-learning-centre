import { useEffect } from "react";
import {
  LOCALES,
  SITE_NAME,
  OG_LOCALE,
  DEFAULT_LOCALE,
  absoluteUrl,
  serializeJsonLd,
  type PageMeta,
} from "./meta";

type Attr = "name" | "property";

const upsertMeta = (attr: Attr, key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(
    `link[rel="${rel}"]:not([data-seo-alt])`
  );
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

// Sahifa <head> qismini (title, description, canonical, hreflang, Open Graph,
// Twitter, JSON-LD) joriy sahifaga moslab yangilaydi. SPA ichida sahifalar
// almashganda ham to'g'ri meta-ma'lumot turishi uchun kerak.
export const applySeo = (meta: PageMeta) => {
  const url = absoluteUrl(`/${meta.lang}${meta.path}`);

  document.title = meta.title;
  document.documentElement.lang = meta.lang;
  document.documentElement.dir = meta.lang === "ar" ? "rtl" : "ltr";

  upsertMeta("name", "description", meta.description);
  upsertMeta(
    "name",
    "robots",
    meta.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"
  );
  upsertLink("canonical", url);

  document.head.querySelectorAll("link[data-seo-alt]").forEach((el) => el.remove());
  if (meta.alternates) {
    const codes = [...LOCALES, "x-default"] as const;
    for (const code of codes) {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = code;
      link.href = absoluteUrl(`/${code === "x-default" ? DEFAULT_LOCALE : code}${meta.path}`);
      link.setAttribute("data-seo-alt", "");
      document.head.appendChild(link);
    }
  }

  upsertMeta("property", "og:type", meta.ogType);
  upsertMeta("property", "og:site_name", SITE_NAME[meta.lang]);
  upsertMeta("property", "og:locale", OG_LOCALE[meta.lang]);
  upsertMeta("property", "og:url", url);
  upsertMeta("property", "og:title", meta.title);
  upsertMeta("property", "og:description", meta.description);
  upsertMeta("property", "og:image", meta.image);
  upsertMeta("name", "twitter:card", meta.ogType === "article" ? "summary_large_image" : "summary");
  upsertMeta("name", "twitter:title", meta.title);
  upsertMeta("name", "twitter:description", meta.description);
  upsertMeta("name", "twitter:image", meta.image);

  let script = document.getElementById("seo-jsonld");
  if (!meta.jsonLd.length) {
    script?.remove();
  } else {
    if (!script) {
      script = document.createElement("script");
      script.id = "seo-jsonld";
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }
    script.textContent = serializeJsonLd(meta.jsonLd);
  }
};

export const useSeo = (meta: PageMeta | null) => {
  const key = meta ? JSON.stringify(meta) : "";

  useEffect(() => {
    if (meta) applySeo(meta);
    // key — meta mazmuni o'zgarganda qayta ishlash uchun
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
};
