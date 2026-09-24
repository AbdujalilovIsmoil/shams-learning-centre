import "aos";
import "swiper/css";
import "swiper/css/pagination";
import Script from "next/script";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "react-phone-number-input/style.css";
import StyledComponentsRegistry from "@/lib";
import { ToastContainer } from "react-toastify";
import { Footer, Header } from "@/app/_components";
import AdBanner from "@/app/_components/specific/AdBanner";
import ChatWidget from "@/app/_components/specific/ChatWidget";
import SiteViewTracker from "@/app/_components/specific/SiteViewTracker";
import ThemeProviderWrapper from "@/app/_components/configure/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const SITE_URL = "https://www.shamsoquvmarkaz.uz";
const SITE_NAME = "Shams O'quv Markazi";
const SITE_DESCRIPTION =
  "Tajribali ustozlar, zamonaviy ta'lim metodlari va mukammal natija kafolati — Shams o'quv markazida arab tilini o'rganing.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Arab tili va ilm-fan markazi`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Arab tili va ilm-fan markazi`,
    description: SITE_DESCRIPTION,
    images: [{ url: "/icon.png", width: 512, height: 512, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} | Arab tili va ilm-fan markazi`,
    description: SITE_DESCRIPTION,
    images: ["/icon.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/icon.png`,
  sameAs: [
    "https://www.instagram.com/shams_oquvmarkaz/",
    "https://www.facebook.com/profile.php?id=61579637375637",
    "https://www.youtube.com/@Shams_oquvmarkaz",
    "https://www.linkedin.com/in/shamsoquvmarkaz/",
  ],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="uz" dir="ltr">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
        ></link>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={poppins.variable}>
        <StyledComponentsRegistry>
          <ThemeProviderWrapper>
            <AdBanner />
            <Header />
            {children}
            <Footer />
            <ChatWidget />
            <SiteViewTracker />
            <ToastContainer />
          </ThemeProviderWrapper>
        </StyledComponentsRegistry>

        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
      </body>
    </html>
  );
};

export default RootLayout;
