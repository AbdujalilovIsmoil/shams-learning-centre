// SEO ma'lumotlari: barcha tillar uchun sarlavha, tavsif va JSON-LD.
// Bu fayl hech qanday brauzer/React API'siga bog'liq emas — ham ilova (useSeo),
// ham build plagini (plugins/seoPages.ts) shu yerdan foydalanadi.

export const SITE_URL = "https://www.shamsoquvmarkaz.uz";
export const API_URL = "https://api.shamsoquvmarkaz.uz";
export const LOCALES = ["uz", "ru", "en", "ar"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "uz";

export const isLocale = (value: string | undefined): value is Locale =>
  !!value && (LOCALES as readonly string[]).includes(value);

export const OG_LOCALE: Record<Locale, string> = {
  uz: "uz_UZ",
  ru: "ru_RU",
  en: "en_US",
  ar: "ar_AR",
};

export const SITE_NAME: Record<Locale, string> = {
  uz: "Shams O'quv Markazi",
  ru: "Учебный центр «Шамс»",
  en: "Shams Learning Center",
  ar: "مركز شمس التعليمي",
};

const HOME_TITLE: Record<Locale, string> = {
  uz: "Shams O'quv Markazi | Arab tili va ilm-fan markazi",
  ru: "Учебный центр «Шамс» | Центр арабского языка и науки",
  en: "Shams Learning Center | Arabic language and science center",
  ar: "مركز شمس التعليمي | مركز اللغة العربية والعلوم",
};

const HOME_DESCRIPTION: Record<Locale, string> = {
  uz: "Tajribali ustozlar, zamonaviy ta'lim metodlari va mukammal natija kafolati — Shams o'quv markazida arab tilini o'rganing.",
  ru: "Опытные преподаватели, современные методики и гарантия результата — изучайте арабский язык в учебном центре «Шамс».",
  en: "Experienced teachers, modern teaching methods and guaranteed results — learn Arabic at Shams Learning Center.",
  ar: "معلمون ذوو خبرة وأساليب تعليم حديثة ونتائج مضمونة — تعلّم اللغة العربية في مركز شمس التعليمي.",
};

const BLOG_TITLE: Record<Locale, string> = {
  uz: "Blog — arab tilini o'rganish bo'yicha maqolalar",
  ru: "Блог — статьи об изучении арабского языка",
  en: "Blog — articles on learning Arabic",
  ar: "المدونة — مقالات عن تعلّم اللغة العربية",
};

const BLOG_DESCRIPTION: Record<Locale, string> = {
  uz: "Arab tilini o'rganish, ta'lim metodlari va til o'rganish bo'yicha foydali maslahatlar va maqolalar.",
  ru: "Полезные советы и статьи об изучении арабского языка и методах обучения.",
  en: "Useful tips and articles about learning Arabic and effective teaching methods.",
  ar: "نصائح ومقالات مفيدة حول تعلّم اللغة العربية وأساليب التعليم الفعّالة.",
};

const NOT_FOUND_TITLE: Record<Locale, string> = {
  uz: "404 — Sahifa topilmadi",
  ru: "404 — Страница не найдена",
  en: "404 — Page not found",
  ar: "404 — الصفحة غير موجودة",
};

export const BLOG_LABEL: Record<Locale, string> = {
  uz: "Blog",
  ru: "Блог",
  en: "Blog",
  ar: "المدونة",
};

export const HOME_LABEL: Record<Locale, string> = {
  uz: "Bosh sahifa",
  ru: "Главная",
  en: "Home",
  ar: "الرئيسية",
};

export interface BlogPostSeo {
  slug: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  images?: string[];
  date?: string;
  createdAt?: string;
  updatedAt?: string;
  category?: Record<Locale, string>;
}

export type SeoPage =
  | { type: "home" }
  | { type: "blog" }
  | { type: "post"; post?: BlogPostSeo; slug: string }
  | { type: "notFound" };

export interface PageMeta {
  lang: Locale;
  title: string;
  description: string;
  // sayt ildiziga nisbatan yo'l, tilsiz: "", "/blog", "/blog/slug"
  path: string;
  image: string;
  ogType: "website" | "article";
  noindex: boolean;
  // hreflang alternativlari kerakmi (404 uchun kerak emas)
  alternates: boolean;
  jsonLd: object[];
}

export const absoluteUrl = (path: string) => `${SITE_URL}${path}`;

export const resolveImage = (image: string | undefined) => {
  if (!image) return absoluteUrl("/icon.png");
  return image.startsWith("http") ? image : `${API_URL}${image}`;
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME.uz,
  alternateName: [SITE_NAME.ru, SITE_NAME.en, SITE_NAME.ar],
  url: SITE_URL,
  logo: absoluteUrl("/icon.png"),
  image: absoluteUrl("/icon.png"),
  description: HOME_DESCRIPTION.uz,
  email: "shamsoquvmarkaz@gmail.com",
  knowsLanguage: ["uz", "ru", "en", "ar"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "shamsoquvmarkaz@gmail.com",
      url: "https://t.me/Shams_markaz_admin",
      availableLanguage: ["uz", "ru", "en", "ar"],
    },
  ],
  sameAs: [
    "https://t.me/Shams_oquvmarkaz",
    "https://www.instagram.com/shams_oquvmarkaz/",
    "https://www.facebook.com/profile.php?id=61579637375637",
    "https://www.youtube.com/@Shams_oquvmarkaz",
    "https://www.linkedin.com/in/shamsoquvmarkaz/",
  ],
};

const websiteJsonLd = (lang: Locale) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME[lang],
  inLanguage: lang,
  publisher: { "@id": `${SITE_URL}/#organization` },
});

const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

const toIsoDate = (value: string | undefined) => {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString();
};

export const getPageMeta = (lang: Locale, page: SeoPage): PageMeta => {
  const base = {
    lang,
    image: absoluteUrl("/icon.png"),
    ogType: "website" as const,
    noindex: false,
    alternates: true,
  };

  if (page.type === "home") {
    return {
      ...base,
      title: HOME_TITLE[lang],
      description: HOME_DESCRIPTION[lang],
      path: "",
      jsonLd: [organizationJsonLd, websiteJsonLd(lang)],
    };
  }

  if (page.type === "blog") {
    return {
      ...base,
      title: `${BLOG_TITLE[lang]} | ${SITE_NAME[lang]}`,
      description: BLOG_DESCRIPTION[lang],
      path: "/blog",
      jsonLd: [
        organizationJsonLd,
        breadcrumbJsonLd([
          { name: HOME_LABEL[lang], path: `/${lang}` },
          { name: BLOG_LABEL[lang], path: `/${lang}/blog` },
        ]),
      ],
    };
  }

  if (page.type === "post") {
    const path = `/blog/${page.slug}`;
    const post = page.post;

    // maqola hali yuklanmagan bo'lsa — blog sahifasining umumiy ma'lumoti
    if (!post) {
      return {
        ...base,
        title: `${BLOG_TITLE[lang]} | ${SITE_NAME[lang]}`,
        description: BLOG_DESCRIPTION[lang],
        path,
        jsonLd: [organizationJsonLd],
      };
    }

    const title = post.title[lang] || post.title.uz;
    const description = post.excerpt[lang] || post.excerpt.uz || BLOG_DESCRIPTION[lang];
    const image = resolveImage(post.images?.[0]);
    const published = toIsoDate(post.date) ?? toIsoDate(post.createdAt);
    const modified = toIsoDate(post.updatedAt) ?? published;

    return {
      ...base,
      title: `${title} | ${SITE_NAME[lang]}`,
      description,
      path,
      image,
      ogType: "article",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(`/${lang}${path}`) },
          headline: title.slice(0, 110),
          description,
          image: (post.images?.length ? post.images : [""]).map(resolveImage),
          datePublished: published,
          dateModified: modified,
          inLanguage: lang,
          articleSection: post.category?.[lang],
          author: { "@id": `${SITE_URL}/#organization` },
          publisher: { "@id": `${SITE_URL}/#organization` },
        },
        breadcrumbJsonLd([
          { name: HOME_LABEL[lang], path: `/${lang}` },
          { name: BLOG_LABEL[lang], path: `/${lang}/blog` },
          { name: title, path: `/${lang}${path}` },
        ]),
      ],
    };
  }

  return {
    ...base,
    title: `${NOT_FOUND_TITLE[lang]} | ${SITE_NAME[lang]}`,
    description: HOME_DESCRIPTION[lang],
    path: "",
    noindex: true,
    alternates: false,
    jsonLd: [],
  };
};

const escapeAttr = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

// JSON-LD ni <script> ichiga xavfsiz joylash ("</script>" ni oldini olish)
export const serializeJsonLd = (data: object[]) =>
  JSON.stringify(data.length === 1 ? data[0] : data).replace(/</g, "\\u003c");

// Statik HTML qobig'i uchun <head> bloki (build plagini ishlatadi).
// Ilovadagi useSeo xuddi shu teglarni ishga tushgach yangilab boradi.
//
// minimal: true — "fallback" index.html uchun (noma'lum / hali build qilinmagan
// manzillarga xizmat qiladi). Unda canonical, hreflang va og:url BO'LMAYDI,
// aks holda har qanday manzil bosh sahifaga "canonical" bo'lib qolardi.
export const renderHeadBlock = (meta: PageMeta, options: { minimal?: boolean } = {}) => {
  const minimal = options.minimal ?? false;
  const url = absoluteUrl(`/${meta.lang}${meta.path}`);
  const lines: string[] = [
    `<title>${escapeAttr(meta.title)}</title>`,
    `<meta name="description" content="${escapeAttr(meta.description)}" />`,
    `<meta name="robots" content="${meta.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"}" />`,
  ];

  if (!minimal) lines.push(`<link rel="canonical" href="${url}" />`);

  if (meta.alternates && !minimal) {
    for (const code of LOCALES) {
      lines.push(
        `<link rel="alternate" hreflang="${code}" href="${absoluteUrl(`/${code}${meta.path}`)}" data-seo-alt />`
      );
    }
    lines.push(
      `<link rel="alternate" hreflang="x-default" href="${absoluteUrl(`/${DEFAULT_LOCALE}${meta.path}`)}" data-seo-alt />`
    );
  }

  lines.push(
    `<meta property="og:type" content="${meta.ogType}" />`,
    `<meta property="og:site_name" content="${escapeAttr(SITE_NAME[meta.lang])}" />`,
    `<meta property="og:locale" content="${OG_LOCALE[meta.lang]}" />`,
    ...(minimal ? [] : [`<meta property="og:url" content="${url}" />`]),
    `<meta property="og:title" content="${escapeAttr(meta.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(meta.description)}" />`,
    `<meta property="og:image" content="${meta.image}" />`,
    `<meta name="twitter:card" content="${meta.ogType === "article" ? "summary_large_image" : "summary"}" />`,
    `<meta name="twitter:title" content="${escapeAttr(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(meta.description)}" />`,
    `<meta name="twitter:image" content="${meta.image}" />`
  );

  if (meta.jsonLd.length && !minimal) {
    lines.push(
      `<script type="application/ld+json" id="seo-jsonld">${serializeJsonLd(meta.jsonLd)}</script>`
    );
  }

  return lines.join("\n    ");
};
