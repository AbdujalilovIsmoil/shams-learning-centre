import { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Footer, Header } from "@/_components";
import AdBanner from "@/_components/specific/AdBanner";
import ChatWidget from "@/_components/specific/ChatWidget";
import SiteViewTracker from "@/_components/specific/SiteViewTracker";
import ThemeProviderWrapper from "@/_components/configure/ThemeProvider";
import { useSeo } from "@/seo/useSeo";
import { DEFAULT_LOCALE, getPageMeta, isLocale, type PageMeta } from "@/seo/meta";
import { Home, NotFound, BlogPage, ErrorBoundary, BlogDetailPage } from "@/pages";
import {
  Route,
  Routes,
  Navigate,
  Outlet,
  useParams,
  useLocation,
} from "react-router-dom";

const LOCALES = ["uz", "en", "ru", "ar"];

const SKIP_LINK_TEXT: Record<string, string> = {
  uz: "Asosiy mazmunga o'tish",
  ru: "Перейти к основному содержимому",
  en: "Skip to main content",
  ar: "انتقل إلى المحتوى الرئيسي",
};

// Til ko'rsatilmagan manzillar (masalan "/" yoki "/blog") default tilga (uz)
// yo'naltiriladi — avvalgi Next.js middleware bilan bir xil.
const LocaleGate = () => {
  const { locale = "" } = useParams();
  const { pathname, search, hash } = useLocation();

  if (!LOCALES.includes(locale)) {
    const target = pathname === "/" ? "/uz" : `/uz${pathname}`;
    return <Navigate to={`${target}${search}${hash}`} replace />;
  }

  return <Outlet />;
};

// Sahifa almashganda tepaga, `#anchor` bo'lsa shu elementga scroll qiladi
// (Next.js navigatsiyasidagi odatiy xatti-harakat).
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

// Bosh sahifa va blog ro'yxati uchun title/description/canonical/hreflang/JSON-LD.
// Blog maqolasi (BlogDetail) va 404 sahifa o'z meta-ma'lumotini o'zi beradi.
const SeoManager = () => {
  const { pathname } = useLocation();
  const [first, second, third] = pathname.split("/").filter(Boolean);
  const lang = isLocale(first) ? first : DEFAULT_LOCALE;

  let meta: PageMeta | null = null;
  if (isLocale(first) && !second) meta = getPageMeta(lang, { type: "home" });
  else if (isLocale(first) && second === "blog" && !third) meta = getPageMeta(lang, { type: "blog" });

  useSeo(meta);
  return null;
};

// Sahifa almashganda ekran o'qish dasturlariga yangi sahifa nomini e'lon qiladi
// va klaviatura fokusini asosiy mazmunga o'tkazadi (SPA'da brauzer buni o'zi qilmaydi).
const RouteAnnouncer = ({ mainRef }: { mainRef: React.RefObject<HTMLElement | null> }) => {
  const { pathname } = useLocation();
  const [message, setMessage] = useState("");
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // title useSeo effektidan keyin yangilanadi
    const timer = setTimeout(() => {
      setMessage(document.title);
      mainRef.current?.focus({ preventScroll: true });
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname, mainRef]);

  return (
    <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
      {message}
    </div>
  );
};

const App = () => {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const lang = pathname.split("/")[1];

  return (
    <ThemeProviderWrapper>
      <a className="skip-link" href="#main-content">
        {SKIP_LINK_TEXT[lang] ?? SKIP_LINK_TEXT.uz}
      </a>
      <AdBanner />
      <Header />
      <main id="main-content" ref={mainRef} tabIndex={-1}>
      <ErrorBoundary resetKey={pathname}>
        <Routes>
          <Route path="/" element={<Navigate to="/uz" replace />} />
          <Route path="/:locale" element={<LocaleGate />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:slug" element={<BlogDetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<LocaleGate />} />
        </Routes>
      </ErrorBoundary>
      </main>
      <Footer />
      <ChatWidget />
      <SiteViewTracker />
      <ToastContainer />
      <ScrollManager />
      <SeoManager />
      <RouteAnnouncer mainRef={mainRef} />
    </ThemeProviderWrapper>
  );
};

export default App;
