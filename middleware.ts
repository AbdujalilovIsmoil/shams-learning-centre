import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Faqat qo'llab-quvvatlanadigan tillar
  const locales = ["uz", "en", "ru", "ar"];

  // URL bo'sh bo'lsa yoki til yo'q bo'lsa, default tilga redirect qilamiz
  const parts = pathname.split("/").filter(Boolean); // ['', 'uz', 'page'] => ['uz', 'page']

  // Agar til mavjud bo'lmasa, default tilga yo'naltiramiz
  if (parts.length === 0 || !locales.includes(parts[0])) {
    return NextResponse.redirect(new URL(`/uz${pathname}`, req.url));
  }

  // Agar URL til bilan boshlansa, lekin ortiqcha noto'g'ri qism bo'lsa (masalan tilga mos kelmaydigan qism)
  // parts[0] til, qolganlari sahifa nomi yoki bo'sh bo'lishi kerak
  const invalidPath = parts.some((part, index) => {
    if (index === 0) return false; // til
    return part === ""; // bo'sh string bo'lmasligi kerak, agar bo'sh bo'lsa OK
  });

  if (invalidPath) {
    // Noto'g'ri URL bo'lsa, 404 sahifaga yo'naltirish
    return NextResponse.rewrite(new URL("/404", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|api).*)"],
};
