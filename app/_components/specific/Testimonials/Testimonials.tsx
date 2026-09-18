"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Language } from "@/app/types";
import { studentsFeedback } from "./data";
import { fetchTestimonials, resolveTestimonialAvatar, TestimonialItem } from "./api";
import { CarouselSmallArrowIcon, StarIcon } from "@/public/images/svg";
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
  TestimonialsNavigation,
  TestimonialsContentText,
  TestimonialsFooterTitle,
  TestimonialsNavigations,
  TestimonialsQuoteIcon,
  TestimonialsPagination,
  TestimonialsFooterInfo,
  TestimonialsCarouselWrapper,
  TestimonialsContentTitle,
  TestimonialsSkeletonGrid,
  TestimonialsSkeletonCard,
  TestimonialsAvatarFallback,
  TestimonialsFooterItemImage,
  TestimonialsNavigationImage,
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
                modules={[Autoplay, Navigation, Pagination]}
                dir={language === "ar" ? "rtl" : "ltr"}
                navigation={{
                  prevEl: ".testimonials-prev",
                  nextEl: ".testimonials-next",
                }}
                pagination={{
                  el: ".testimonials-pagination",
                  clickable: true,
                }}
                autoplay={{
                  delay: 4000,
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

                  return (
                    <SwiperSlide key={item.id}>
                      <TestimonialsCard data-aos="fade-up">
                        <TestimonialsQuoteIcon>
                          <QuoteGlyph />
                        </TestimonialsQuoteIcon>

                        <TestimonialsCardText>{text}</TestimonialsCardText>

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
                                    alt="star icon"
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

              <TestimonialsNavigations>
                <TestimonialsNavigation
                  type="button"
                  className="testimonials-prev"
                >
                  <TestimonialsNavigationImage
                    width={18}
                    height={18}
                    alt="arrow left"
                    src={CarouselSmallArrowIcon}
                  />
                </TestimonialsNavigation>

                <TestimonialsPagination className="testimonials-pagination" />

                <TestimonialsNavigation
                  type="button"
                  className="testimonials-next"
                >
                  <TestimonialsNavigationImage
                    width={18}
                    height={18}
                    alt="arrow right"
                    src={CarouselSmallArrowIcon}
                  />
                </TestimonialsNavigation>
              </TestimonialsNavigations>
            </TestimonialsCarouselWrapper>
          )}
        </TestimonialsContainer>
      </div>
    </TestimonialsSection>
  );
};

export default Testimonials;
