
import { useEffect, useRef, useState } from "react";
import { usePathname } from "@/lib/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { A11y, Autoplay } from "swiper/modules";
import { Language } from "@/types";
import { getSwiperA11y } from "@/a11y/labels";
import { getDotsState } from "@/_components/ui/CarouselDots";
import CarouselControls from "@/_components/ui/CarouselControls";
import { studentsFeedback } from "./data";
import { fetchTestimonials, resolveTestimonialAvatar, TestimonialItem } from "./api";
import { StarIcon } from "@/assets/images/svg";
import {
  TestimonialsBox,
  TestimonialsCard,
  TestimonialsEmpty,
  TestimonialsSection,
  TestimonialsCardText,
  TestimonialsContainer,
  TestimonialsFooterList,
  TestimonialsFooterItem,
  TestimonialsAvatarImage,
  TestimonialsCardFooter,
  TestimonialsContentText,
  TestimonialsFooterTitle,
  TestimonialsQuoteIcon,
  TestimonialsFooterInfo,
  TestimonialsCarouselWrapper,
  TestimonialsContentTitle,
  TestimonialsToggleButton,
  TestimonialsSkeletonGrid,
  TestimonialsSkeletonCard,
  TestimonialsAvatarFallback,
  TestimonialsFooterItemImage,
} from "./style";

const AVATAR_PALETTE = [
  "#49bbbd",
  "#f0a13a",
  "#6c8ee8",
  "#e5788d",
  "#8b6fe0",
  "#3fb07f",
];

const colorForName = (name: string) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_PALETTE[Math.abs(hash) % AVATAR_PALETTE.length];
};

const initialsForName = (name: string) => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
};

const QuoteGlyph = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.5 6.5C6 7.5 4 10 4 13.5S6.2 19 9 19v-3.2c-1.4 0-2.3-1-2.3-2.3 0-1.1.7-1.9 2-2.2l.8-.2V6.5zm9 0c-3.5 1-5.5 3.5-5.5 7S15.2 19 18 19v-3.2c-1.4 0-2.3-1-2.3-2.3 0-1.1.7-1.9 2-2.2l.8-.2V6.5z" />
  </svg>
);

const Testimonials = () => {
  const pathName = usePathname();
  const language = (pathName.split("/")[1] || "uz") as Language;

  const [items, setItems] = useState<TestimonialItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  // Uzun fikrlarni "..." bilan kesib tashlash o'rniga — "Batafsil" tugmasi
  // bosilgan fikrlarning id'lari shu yerda saqlanadi va to'liq ko'rsatiladi.
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalDots, setTotalDots] = useState(0);
  const [isBeginning, setIsBeginning] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const collapseTimers = useRef<Map<string, ReturnType<typeof setTimeout>>>(
    new Map()
  );

  // "Batafsil" bosilganda carousel avtomatik aylanishi 5 soniyaga
  // to'xtaydi (o'qish tugamasdan slayd almashib ketmasligi uchun), shu
  // vaqt tugagach fikr yana yopiladi va carousel davom etadi. Foydalanuvchi
  // o'zi "Yig'ish" bosib yopsa ham xuddi shunday darhol davom etadi.
  const collapseAndResume = (id: string) => {
    setExpandedIds((prev) => {
      if (!prev.has(id)) return prev;
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
    swiperRef.current?.autoplay?.start();
    collapseTimers.current.delete(id);
  };

  const toggleExpanded = (id: string) => {
    const existingTimer = collapseTimers.current.get(id);

    if (existingTimer) {
      clearTimeout(existingTimer);
      collapseTimers.current.delete(id);
      collapseAndResume(id);
      return;
    }

    setExpandedIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    swiperRef.current?.autoplay?.stop();

    const timer = setTimeout(() => collapseAndResume(id), 5000);
    collapseTimers.current.set(id, timer);
  };

  useEffect(() => {
    const timers = collapseTimers.current;
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      timers.clear();
    };
  }, []);

  const readMoreLabel: Record<Language, string> = {
    uz: "Batafsil",
    en: "Read more",
    ar: "المزيد",
    ru: "Подробнее",
  };

  const readLessLabel: Record<Language, string> = {
    uz: "Yig'ish",
    en: "Show less",
    ar: "عرض أقل",
    ru: "Свернуть",
  };

  // Taxminan 6 qatordan oshadigan matnlar uchungina "Batafsil" tugmasi
  // ko'rsatiladi — qisqa fikrlarda bu tugma ortiqcha bo'lardi.
  const NEEDS_TOGGLE_LENGTH = 220;

  const syncDots = (swiper: SwiperInstance) => {
    const { active, total, isBeginning, isEnd } = getDotsState(swiper, items.length);
    setActiveIndex(active);
    setTotalDots(total);
    setIsBeginning(isBeginning);
    setIsEnd(isEnd);
  };

  useEffect(() => {
    let active = true;

    fetchTestimonials()
      .then((data) => {
        if (active) setItems(data);
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <TestimonialsSection id="testimonials">
      <div className="container">
        <TestimonialsContainer>
          <TestimonialsBox>
            <div data-aos="fade-down">
              <TestimonialsContentTitle>
                {studentsFeedback.title[language]}
              </TestimonialsContentTitle>
              <TestimonialsContentText>
                {studentsFeedback.description[language]}
              </TestimonialsContentText>
            </div>
          </TestimonialsBox>

          {isLoading ? (
            <TestimonialsSkeletonGrid>
              <TestimonialsSkeletonCard />
              <TestimonialsSkeletonCard />
              <TestimonialsSkeletonCard />
            </TestimonialsSkeletonGrid>
          ) : items.length === 0 ? (
            <TestimonialsEmpty>
              {language === "ar"
                ? "لا توجد آراء بعد."
                : language === "ru"
                  ? "Пока нет отзывов."
                  : language === "en"
                    ? "No reviews yet."
                    : "Hozircha fikrlar yo‘q."}
            </TestimonialsEmpty>
          ) : (
            <TestimonialsCarouselWrapper>
              <Swiper
                loop={items.length > 3}
                key={language}
                slidesPerView={1}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  syncDots(swiper);
                }}
                onSlideChange={syncDots}
                onBreakpoint={syncDots}
                onResize={syncDots}
                modules={[A11y, Autoplay]}
              a11y={getSwiperA11y(language)}
                dir={language === "ar" ? "rtl" : "ltr"}
                autoplay={{
                  delay: 4000,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: false,
                }}
                spaceBetween={28}
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 20 },
                  576: { slidesPerView: 2, spaceBetween: 20 },
                  1024: { slidesPerView: 3, spaceBetween: 28 },
                }}
              >
                {items.map((item) => {
                  const avatarUrl = resolveTestimonialAvatar(item.avatar);
                  const text = item.text[language] || item.text.uz;
                  const isExpanded = expandedIds.has(item.id);
                  const needsToggle = text.length > NEEDS_TOGGLE_LENGTH;

                  return (
                    <SwiperSlide key={item.id}>
                      <TestimonialsCard data-aos="fade-up">
                        <TestimonialsQuoteIcon>
                          <QuoteGlyph />
                        </TestimonialsQuoteIcon>

                        <TestimonialsCardText $expanded={isExpanded}>
                          {text}
                        </TestimonialsCardText>

                        {needsToggle && (
                          <TestimonialsToggleButton
                            type="button"
                            onClick={() => toggleExpanded(item.id)}
                          >
                            {isExpanded
                              ? readLessLabel[language]
                              : readMoreLabel[language]}
                          </TestimonialsToggleButton>
                        )}

                        <TestimonialsCardFooter>
                          {avatarUrl ? (
                            <TestimonialsAvatarImage
                              width={50}
                              height={50}
                              src={avatarUrl}
                              alt={item.author}
                            />
                          ) : (
                            <TestimonialsAvatarFallback
                              $bg={colorForName(item.author)}
                            >
                              {initialsForName(item.author)}
                            </TestimonialsAvatarFallback>
                          )}

                          <TestimonialsFooterInfo>
                            <TestimonialsFooterTitle>
                              {item.author}
                            </TestimonialsFooterTitle>

                            <TestimonialsFooterList>
                              {[...Array(5)].map((_, i) => (
                                <TestimonialsFooterItem
                                  key={i}
                                  $filled={i < item.rate}
                                >
                                  <TestimonialsFooterItemImage
                                    width={15}
                                    height={15}
                                    src={StarIcon}
                                    alt=""
                                  />
                                </TestimonialsFooterItem>
                              ))}
                            </TestimonialsFooterList>
                          </TestimonialsFooterInfo>
                        </TestimonialsCardFooter>
                      </TestimonialsCard>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <CarouselControls
                language={language}
                variant="large"
                total={totalDots}
                active={activeIndex}
                prevDisabled={isBeginning}
                nextDisabled={isEnd}
                onPrev={() => swiperRef.current?.slidePrev()}
                onNext={() => swiperRef.current?.slideNext()}
                onSelect={(index) => swiperRef.current?.slideToLoop(index)}
              />
            </TestimonialsCarouselWrapper>
          )}
        </TestimonialsContainer>
      </div>
    </TestimonialsSection>
  );
};

export default Testimonials;
