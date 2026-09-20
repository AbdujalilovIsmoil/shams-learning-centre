import "aos";
import "swiper/css";
import Script from "next/script";
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

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="uz" dir="ltr">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
        ></link>
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
