"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { MenuCloseIcon, MenuOpenIcon, SiteLogo } from "@/public/images/svg";
import {
  RusLanguage,
  EnglishImage,
  ArabLanguage,
  UzbekLanguage,
} from "@/public/images/png";
import { AD_BANNER_HEIGHT_EVENT } from "@/app/_components/specific/AdBanner/api";
import {
  Trigger,
  Dropdown,
  HeaderNav,
  Container,
  HeaderList,
  HeaderItem,
  HeaderLink,
  FlagCircle,
  HeaderMenu,
  HeaderMenuHead,
  HeaderMenuOverlay,
  HeaderMenuCloseButton,
  HeaderWrapper,
  HeaderContact,
  HeaderMenuLink,
  HeaderMenuItem,
  HeaderMenuList,
  LanguageOption,
  HeaderMenuIcon,
  HeaderSiteLogo,
  HeaderContainer,
  FlagCircleSmall,
  HeaderSiteLinkLogo,
  HeaderContactButton,
  HeaderMenuOpenContainer,
} from "./style";

type Language = "uz" | "en" | "ru" | "ar";

type Section = {
  id: string;
  label: Record<Language, string>;
};

const sections: Section[] = [
  {
    id: "home",
    label: { uz: "Bosh saxifa", en: "Home", ru: "Главная", ar: "الرئيسية" },
  },
  {
    id: "advantages",
    label: {
      uz: "Avzaliklar",
      en: "Advantages",
      ru: "Преимущества",
      ar: "المميزات",
    },
  },
  {
    id: "courses",
    label: { uz: "Kurslar", en: "Courses", ru: "Курсы", ar: "الدورات" },
  },
  {
    id: "about",
    label: {
      uz: "Biz xaqimizda",
      en: "About Us",
      ru: "О нас",
      ar: "معلومات عنا",
    },
  },
];

const blogLabel: Record<Language, string> = {
  uz: "Blog",
  en: "Blog",
  ru: "Блог",
  ar: "المدونة",
};

const languages = [
  {
    code: "uz",
    name: "Uzbek",
    flagUrl: UzbekLanguage.src,
  },
  { code: "ru", name: "Rus", flagUrl: RusLanguage.src },
  { code: "en", name: "English", flagUrl: EnglishImage.src },
  { code: "ar", name: "Arab", flagUrl: ArabLanguage.src },
];

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const language = (pathName.split("/")[1] || "uz") as Language;
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onEscape);
    };
  }, [isMenuOpen]);

  const lastSentRef = useRef(activeSection);

  // ✅ Banner (agar yoqilgan bo'lsa) sayt tepasida Header'dan oldin ko'rinadi.
  // Header o'zini shu banner ostiga joylashtiradi (top = banner balandligi)
  // va scroll qilinganda banner bilan birga tepaga suriladi — banner
  // balandligicha scroll qilingach, top 0'ga "yopishib qoladi" va Header
  // shu yerdan normal fixed sifatida yurishda davom etadi. Banner bo'lmasa
  // (yoki o'chirilgan bo'lsa) bannerHeight 0 bo'lib, Header darhol top:0'da
  // fixed bo'lib qoladi — avvalgi (banner qo'shilishidan oldingi) xatti-harakat.
  const [bannerHeight, setBannerHeight] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const onBannerHeight = (event: Event) => {
      const detail = (event as CustomEvent<number>).detail;
      setBannerHeight(typeof detail === "number" ? detail : 0);
    };

    window.addEventListener(AD_BANNER_HEIGHT_EVENT, onBannerHeight);
    return () =>
      window.removeEventListener(AD_BANNER_HEIGHT_EVENT, onBannerHeight);
  }, []);

  useEffect(() => {
    if (bannerHeight <= 0) {
      setHeaderTop(0);
      return;
    }

    let ticking = false;

    const update = () => {
      setHeaderTop(Math.max(bannerHeight - window.scrollY, 0));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [bannerHeight]);

  // ✅ Bosh sahifadamizmi (faqat shu yerda section-scroll-spy ishlaydi)
  const isHomePage = pathName === `/${language}` || pathName === `/${language}/`;

  // ✅ Scroll va click uchun umumiy handler
  const handleSectionSelect = useCallback(
    (sectionId: string, updateUrl: boolean = false) => {
      if (lastSentRef.current === sectionId) return;
      lastSentRef.current = sectionId;
      setActiveSection(sectionId);

      // ✅ Scroll bo‘lganda ham URL hash yangilansin
      if (updateUrl) {
        const basePath = `/${language}`;
        const newUrl =
          sectionId === "home" ? basePath : `${basePath}#${sectionId}`;
        window.history.replaceState(null, "", newUrl);
      }
    },
    [language]
  );

  useEffect(() => {
    // ✅ Blog (yoki boshqa) sahifalarida bu bo'limlar DOM'da yo'q —
    // scroll-spy faqat bosh sahifada ishga tushsin
    if (!isHomePage) return;

    let ticking = false;

    const detectSectionInView = () => {
      let current = sections[0].id;
      for (let i = 0; i < sections.length; i++) {
        const sec = sections[i];
        const el = document.getElementById(sec.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          current = sec.id;
          break;
        }
      }
      return current;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          const inView = detectSectionInView();
          // ✅ Scroll bo‘lganda handleSectionSelect chaqiriladi va URL yangilanadi
          if (lastSentRef.current !== inView) {
            handleSectionSelect(inView, true);
          } else {
            setActiveSection(inView);
          }
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [handleSectionSelect, isHomePage]);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.find((lang) => lang.code === language) || languages[1]
  );

  useEffect(() => {
    const currentLang = languages.find((lang) => lang.code === language);
    if (currentLang) {
      setSelectedLanguage(currentLang);
    }
  }, [language]);

  const handleLanguageSelect = (language: (typeof languages)[0]) => {
    setSelectedLanguage(language);
    setIsOpen(false);

    const restOfPath = pathName.split("/").slice(2).join("/");
    const newPath = restOfPath
      ? `/${language.code}/${restOfPath}`
      : `/${language.code}`;

    router.push(newPath);
    localStorage.setItem("selectedLanguage", language.code);
  };

  const contactData = {
    uz: "Biz bilan aloqa",
    en: "Contact us",
    ar: "اتصل بنا",
    ru: "Связаться с нами",
  };

  const isBlogActive = pathName.includes("/blog");

  return (
    <>
      <HeaderMenuOverlay $isOpen={isMenuOpen} onClick={closeMenu} />

      <HeaderMenu $isOpenMenu={isMenuOpen}>
        <HeaderMenuHead>
          <HeaderMenuCloseButton
            type="button"
            onClick={closeMenu}
            aria-label="close menu"
          >
            <HeaderMenuIcon
              width={16}
              height={16}
              src={MenuCloseIcon}
              alt="close menu icon"
            />
          </HeaderMenuCloseButton>
        </HeaderMenuHead>

        <HeaderMenuList>
          {sections.map((section: Section) => (
            <HeaderMenuItem key={section.id}>
              <HeaderMenuLink
                as={Link}
                href={`/${language}#${section.id}`}
                onClick={() => {
                  if (isHomePage) handleSectionSelect(section.id, true);
                  closeMenu();
                }}
                $isActive={isHomePage && activeSection === section.id}
              >
                {section.label[language]}
              </HeaderMenuLink>
            </HeaderMenuItem>
          ))}
          <HeaderMenuItem>
            <HeaderMenuLink
              as={Link}
              href={`/${language}/blog`}
              onClick={closeMenu}
              $isActive={isBlogActive}
            >
              {blogLabel[language]}
            </HeaderMenuLink>
          </HeaderMenuItem>
        </HeaderMenuList>
      </HeaderMenu>
      <HeaderContainer style={{ top: headerTop }}>
        <div className="container">
          <HeaderWrapper>
            <HeaderSiteLinkLogo href={`/${language}`}>
              <HeaderSiteLogo
                height={88}
                width={150}
                src={SiteLogo.src}
                alt="Shams O'quv Markaz"
              />
            </HeaderSiteLinkLogo>

            <HeaderNav>
              <HeaderList>
                {sections.map((section: Section) => (
                  <HeaderItem key={section.id}>
                    <HeaderLink
                      as={Link}
                      href={`/${language}#${section.id}`}
                      onClick={() =>
                        isHomePage && handleSectionSelect(section.id, true)
                      }
                      $isActive={isHomePage && activeSection === section.id}
                    >
                      {section.label[language]}
                    </HeaderLink>
                  </HeaderItem>
                ))}
                <HeaderItem>
                  <HeaderLink
                    as={Link}
                    href={`/${language}/blog`}
                    $isActive={isBlogActive}
                  >
                    {blogLabel[language]}
                  </HeaderLink>
                </HeaderItem>
              </HeaderList>
            </HeaderNav>

            <HeaderContact>
              <Container
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <Trigger role="button">
                  <FlagCircle $flagUrl={selectedLanguage.flagUrl} />
                </Trigger>

                <Dropdown $isOpen={isOpen}>
                  {languages.map((language) => (
                    <LanguageOption
                      key={language.code}
                      onClick={() => handleLanguageSelect(language)}
                    >
                      <FlagCircleSmall $flagUrl={language.flagUrl} />
                      <span>{language.name}</span>
                    </LanguageOption>
                  ))}
                </Dropdown>
              </Container>

              <HeaderContactButton
                role="button"
                target="_blank"
                href="https://t.me/Shams_markaz_admin"
              >
                {contactData[language]}
              </HeaderContactButton>

              <HeaderMenuOpenContainer onClick={toggleMenu} role="button">
                <HeaderMenuIcon
                  width={20}
                  height={20}
                  src={isMenuOpen ? MenuCloseIcon : MenuOpenIcon}
                  alt="menu open icon"
                />
              </HeaderMenuOpenContainer>
            </HeaderContact>
          </HeaderWrapper>
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;
