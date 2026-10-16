# SEO (Google) va Accessibility (a11y) — to'liq qo'llanma

Bu hujjat: nima qilingan, qaysi faylda turibdi, Google'ga saytni qanday chiqarish kerak va
sizdan qanday ma'lumotlar kerak.

---

## 1. Google'ga chiqarish — qadamlar (deploy'dan keyin)

1. **Deploy qiling** (`npm run build` → Vercel). Build vaqtida `dist/` ichida har bir til/sahifa
   uchun alohida HTML, `sitemap.xml` va `robots.txt` paydo bo'ladi.
2. **Tekshiring** (brauzerda yoki terminalda):
   - `https://www.shamsoquvmarkaz.uz/robots.txt` — `200`, ichida `Sitemap:` qatori bo'lsin.
   - `https://www.shamsoquvmarkaz.uz/sitemap.xml` — `200`, XML ko'rinsin.
   - `curl -s https://www.shamsoquvmarkaz.uz/ru | grep -E "<title>|canonical|hreflang"` —
     rus tilidagi title va `canonical=/ru` chiqsin (JavaScript'siz ham).
   - `/uz` sahifa **500 xato bermasligi** kerak (eski Next.js deploy'da vaqti-vaqti bilan 500 chiqardi —
     Google shu sababli sahifani indekslamagan bo'lishi mumkin). Static SPA'da server xatosi bo'lmaydi.
3. **Google Search Console** (https://search.google.com/search-console):
   1. "Add property" → **Domain** → `shamsoquvmarkaz.uz` → DNS'ga TXT yozuvi qo'shing (eng ishonchli).
      Yoki **URL prefix** → HTML-tag usuli: berilgan kodni `index.html` dagi
      `<meta name="google-site-verification" content="...">` qatoriga qo'ying (**`index.html` ga qo'yilgan**, har bir sahifa qobig'iga tushadi).
   2. **Sitemaps** → `sitemap.xml` ni yuboring.
   3. **URL Inspection** → `https://www.shamsoquvmarkaz.uz/uz` ni kiriting → *Test Live URL* →
      *Request Indexing*. Shuni `/ru`, `/en`, `/ar`, `/uz/blog` uchun ham qiling.
   4. 1–2 haftadan keyin **Pages** bo'limida "Indexed" sonini va xatolarni tekshiring.
4. **Bing Webmaster Tools** (https://www.bing.com/webmasters) — Search Console'dan import qilsa bo'ladi.
5. **Tekshiruv vositalari:**
   - Rich Results Test: https://search.google.com/test/rich-results (BlogPosting, Breadcrumb ko'rinadi)
   - PageSpeed Insights: https://pagespeed.web.dev
   - Open Graph (Telegram/Facebook oldindan ko'rish): https://developers.facebook.com/tools/debug

> Google yangi saytni odatda bir necha kundan bir necha haftagacha indekslaydi. Ichki havolalar,
> Telegram/Instagram'dagi saytga havolalar tezlashtiradi.

---

## 2. SEO — nima qilingan va qayerda

| Nima | Qayerda |
|---|---|
| 4 til uchun title, description, JSON-LD ma'lumotlari | `src/seo/meta.ts` (**matnlarni shu yerda tahrirlang**) |
| Brauzerda sahifa almashganda `<head>` yangilash | `src/seo/useSeo.ts`, `src/App.tsx` (`SeoManager`) |
| Blog maqolasi uchun alohida title/description/OG/`BlogPosting` | `BlogDetail.tsx` (`useSeo`) |
| Build'da har bir sahifa uchun statik HTML + `sitemap.xml` | `plugins/seoPages.ts` |
| `robots.txt`, `site.webmanifest` | `public/` |
| Cache, redirect `/` → `/uz`, SPA fallback | `vercel.json` |

**Har bir sahifada (4 til × bosh sahifa, blog, har bir maqola):**
- `<title>`, `<meta name="description">`, `<link rel="canonical">`
- `hreflang` (uz, ru, en, ar, x-default) — Google tillar o'rtasidagi bog'lanishni tushunadi
- Open Graph (`og:*`) va Twitter Card — Telegram/Facebook/WhatsApp'da chiroyli oldindan ko'rish
- JSON-LD: `EducationalOrganization` + `WebSite` (bosh sahifa), `BlogPosting` + `BreadcrumbList` (maqola)
- `<html lang>` va arab tili uchun `dir="rtl"`
- `<noscript>` ichida matn (JavaScript'siz skanerlar uchun)
- 404 sahifa `noindex` (Google keraksiz sahifalarni indekslamasligi uchun)

**Muhim:** build vaqtida API'dan maqolalar olinadi. **Yangi maqola chiqarganingizda saytni qayta
build qiling** (Vercel → Deployments → Redeploy) — shunda u sitemap'ga va statik HTML'ga tushadi.
Qayta build qilinmasa ham maqola brauzerda ochiladi, lekin sitemap'da bo'lmaydi.
Avtomatlashtirish: Vercel → Settings → Git → **Deploy Hooks** yarating va admin-panel backend'idan
maqola nashr qilinganda shu URL'ga `POST` yuboring.

### Sizdan kerak bo'ladigan ma'lumotlar (men to'qib chiqarmadim)
- **Manzil va telefon** — bo'lsa, `src/seo/meta.ts` dagi `organizationJsonLd` ga `address`
  (`PostalAddress`) va `telephone` qo'shing. Bu Google xaritasi/"local" natijalari uchun juda muhim.
- **Ish vaqti** (`openingHours`), agar offline filial bo'lsa.
- **1200×630 o'lchamli og-image** (logotip + slogan). Hozir 512×512 `icon.png` ishlatiladi; Telegram
  va Facebook katta rasm bilan ancha yaxshi ko'rsatadi. Rasmni `public/og-image.png` ga qo'ying va
  `src/seo/meta.ts` dagi `absoluteUrl("/icon.png")` o'rniga `/og-image.png` yozing.
- ~~Search Console tasdiqlash kodi~~ — qo'yilgan (`index.html`).
- Tarjimalarni (ru/en/ar title va description) o'zingiz yoki ona tilida so'zlashuvchi tekshirib chiqing.

### Bilib qo'ying
- Sayt hali ham **client-side render** (React SPA). Googlebot JavaScript'ni bajaradi, lekin
  server-side render yoki to'liq prerender'ga qaraganda sekinroq indekslaydi. Hozirgi yechim:
  har bir sahifa uchun to'g'ri meta + JSON-LD statik HTML'da bor (bu eng muhim qismi). Agar kelajakda
  to'liq HTML kerak bo'lsa, Next.js'ga qaytish yoki to'liq prerender qo'shish mumkin.
- Matn mazmuni (kurs nomlari, narxlar) JavaScript orqali chiqadi. Sahifa matnini kuchaytirish uchun
  har bir tilda unikal, foydali matn va blog maqolalari muntazam chiqarib turing — bu SEO'ning
  eng katta omili.

---

## 3. Accessibility (a11y) — nima qilingan

Natija: **axe-core** (WCAG 2.0/2.1 A, AA va best-practice qoidalari) bo'yicha 7 ta sahifada
(`/uz`, `/ru`, `/en`, `/ar`, `/uz/blog`, maqola, 404) sahifani to'liq aylantirib o'lchaganda **0 ta buzilish**.
Oldin har sahifada 5–6 ta qoida buzilgan edi.

**Tuzilma (landmark)**
- `<main id="main-content">`, "Asosiy mazmunga o'tish" (skip) havolasi — `Tab` bosilganda birinchi paydo bo'ladi.
- Bosh sahifada `<h1>` (Hero sarlavhasi), blog ro'yxatida sarlavhalar tartibi to'g'rilandi.
- Reklama banneri `<aside>` ichiga olindi.
- SPA'da sahifa almashganda: sahifa nomi ekran o'qish dasturiga e'lon qilinadi (`role="status"`),
  fokus `<main>` ga o'tadi.

**Klaviatura**
- Til menyusi: haqiqiy `<button>`, `aria-expanded`, `Escape` bilan yopiladi, fokus ketganda yopiladi.
- FAQ ("Ko'p so'raladigan savollar"): `Enter`/`Space` bilan ochiladi, `aria-expanded`.
- Chat: `role="dialog"`, ochilganda fokus yozish maydoniga o'tadi, `Escape` yopadi, xabarlar `aria-live`.
- Karusellar: strelkalar va nuqtalar tugma, aniq nomlar (4 tilda), `aria-current`, Swiper `a11y` moduli;
  **sichqoncha ustiga kelganda avtomatik aylanish to'xtaydi** (WCAG 2.2.2).
- Fokus halqasi: saytdagi global `*:focus` qoidasi saqlangan (klaviatura bilan har doim ko'rinadi);
  karusel strelka/nuqtalarida u sichqoncha bosilganda yashiriladi, klaviaturada ko'rinadi (`:focus-visible`).

**Rasmlar va havolalar**
- Bezak rasmlari/ikonkalar `alt=""`, ma'noli rasmlar (xarita, o'qituvchilar, markaz) 4 tilda tavsiflangan
  (`src/a11y/labels.ts`).
- Ijtimoiy tarmoq ikonkalari: `alt="Telegram"`, `"Instagram"` va h.k.; faqat ikonkali havolalarga `aria-label`.
- Blog maqolasidagi `alt`siz rasmlarga maqola sarlavhasi avtomatik qo'yiladi.
- `target="_blank"` havolalarga `rel="noopener noreferrer"` (xavfsizlik).
- `role="button"` noto'g'ri qo'yilgan havolalardan olib tashlandi.

**Formalar**
- Footer formasi maydonlariga `aria-label` va `autocomplete` (`name`, `tel`, `email`).

**Harakat va ranglar**
- `prefers-reduced-motion`: animatsiyalar, AOS va silliq scroll o'chiriladi.
- **Kontrast (WCAG AA 4.5:1)** — quyidagi ranglar `src/styles/theme/theme.ts` da o'zgartirildi:

| Token | Oldin | Hozir | Sabab |
|---|---|---|---|
| `thin_gray` | `#A3A3A3` | `#6B6B6B` | kulrang matn oq fonda 2.5:1 edi |
| `price_link_color` | `#079dab` | `#056a74` | |
| `premium_course_content_text_color` | `#767acc` | `#4a4fa8` | |
| `premium_course_section_text_color` | `#ca9219` | `#7a5600` | |
| `hero_pink_color` | `#d8587e` | `#cc3f6c` | oq matn 3.7:1 edi |
| `successfully_first_color` | `#ea8d32` | `#d97716` | |
| yangi `light_green_text` | — | `#0b7074` | firuza **matn** och fonda uchun |
| yangi `light_green_dark` | — | `#127a7d` | **oq matnli** firuza tugma/belgi foni uchun |
| yangi `light_green_on_dark` | — | `#8ff0f2` | to'q header'dagi faol havola |

Asosiy firuza `#49bbbd` (logo, chiziqlar, dekorativ elementlar) o'zgarmadi. Dizayner shu
ranglarni yoqtirmasa, qiymatlarni shu yerda almashtirish kifoya (kontrast 4.5:1 dan past bo'lmasin).

### Tekshirish usuli
- Avtomatik: `axe-core` (yoki brauzerda *Lighthouse → Accessibility*, *axe DevTools* kengaytmasi).
  Eslatma: AOS animatsiyasi sabab sahifa pastidagi elementlar scroll qilinganda paydo bo'ladi, shuning
  uchun sahifani oxirigacha aylantirib tekshiring.
- Qo'lda (avtomatik vosita topa olmaydigan narsalar): faqat klaviatura bilan (`Tab`, `Shift+Tab`,
  `Enter`, `Space`, `Esc`) butun saytni aylanib chiqing; macOS'da **VoiceOver** (`Cmd+F5`) bilan
  bosh sahifa, til almashtirish, forma va chatni tinglang; brauzerni 200% kattalashtiring.

### Hali qilinmagan / ongli ravishda qoldirilgan
- Chat oynasi sarlavhasidagi gradient fonda oq matn kontrasti qo'lda tekshirilmagan.
- Tugmalardagi firuza fonli oq **belgilar** (matn emas) uchun kontrast 3:1 dan past bo'lishi mumkin.
- Telegram bot tokeni `Footer.tsx` ichida ochiq turibdi — bu xavfsizlik muammosi (a11y emas): tokenni
  almashtirib, so'rovni backend orqali yuboring.
