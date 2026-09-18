import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Faqat qo'llab-quvvatlanadigan tillar
  const locales = ["uz", "en", "ru", "ar"];

  // URL bo'sh bo'lsa yoki til yo'q bo'lsa, default tilga redirect qilamiz
  const parts = pathname.split("/").filter(Boolean); // ['', 'uz', 'page'] => ['uz', 'page']

  // Agar til mavjud bo'lmasa, default tilga yo'naltiramiz
  if (parts.length === 0 || !locales.includes(parts[0])) {
    // "/" uchun pathname aynan "/" bo'lgani sababli `/uz${pathname}` ortiqcha
    // "/uz/" (oxirida slash bilan) hosil qilib, Next.js'ning trailingSlash
    // normalizatsiyasi bilan qo'shimcha redirect zanjiriga sabab bo'lardi —
    // ba'zi muhitlarda (masalan Vercel) shu ikkinchi redirect 404 bilan
    // yakunlanadi. Shuning uchun "/" holatini alohida ishlov beramiz.
    const target = pathname === "/" ? "/uz" : `/uz${pathname}`;
    return NextResponse.redirect(new URL(target, req.url));
  }

  // URL til bilan boshlanadi (masalan /uz, /uz/blog) — qolgan segmentlar
  // mavjud bo'lmagan sahifaga tegishli bo'lsa, Next.js o'zi avtomatik
  // ravishda app/not-found.tsx orqali 404 ko'rsatadi.
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|icon.png|apple-icon.png|.*\\.(?:svg|png|jpg|jpeg|webp|gif|ico|xml|txt|json)$).*)",
  ],
};
