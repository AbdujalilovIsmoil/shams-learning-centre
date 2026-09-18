"use client";

import { Language } from "@/app/types";
import { Autoplay } from "swiper/modules";
import { usePathname } from "next/navigation";
import { contactUs, lessonType, premiumCourses, translations } from "./data";
import {
  SwiperList,
  SwiperSlideItem,
  SwiperSlideStyled,
  SwiperSlideItemBox,
  SwiperSlideItemText,
  SwiperSlideItemList,
  SwiperSlideItemImage,
  PremiumCoursesSection,
  PremiumCoursesContent,
  SwiperSlideItemContent,
  SwiperSlideItemPriceLink,
  PremiumCoursesSectionText,
  SwiperSlideItemPriceTitle,
  PremiumCoursesContentText,
  SwiperSlideItemContentTitle,
  SwiperSlideItemPriceContainer,
} from "./style";

const PremiumCourses = () => {
  const pathName = usePathname();
  const language = (pathName.split("/")[1] || "uz") as Language;

  return (
    <PremiumCoursesSection id="courses">
      <div className="container">
        <PremiumCoursesContent data-aos="n">
          {translations[`${language}` as Language].title}
          <PremiumCoursesContentText>
            {translations[`${language}` as Language].paragraph}
          </PremiumCoursesContentText>
        </PremiumCoursesContent>

        <SwiperList
          loop
          slidesPerView={3}
          spaceBetween={18}
          modules={[Autoplay]}
          autoplay={{ delay: 2500 }}
          dir={language === "ar" ? "rtl" : "ltr"}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {premiumCourses[`${language}` as Language].map((el) => {
            return (
              <SwiperSlideStyled key={el.id}>
                <SwiperSlideItem>
                  <SwiperSlideItemImage
                    width={445}
                    height={265}
                    src={el.image}
                    alt={el.courseType}
                  />
                  <SwiperSlideItemContent>
                    <SwiperSlideItemContentTitle>
                      {el.courseType}
                    </SwiperSlideItemContentTitle>

                    <SwiperSlideItemList>
                      {el.data.map((el) => {
                        return (
                          <SwiperSlideItemBox key={el.id}>
                            <SwiperSlideItemText>{el.text}</SwiperSlideItemText>
                          </SwiperSlideItemBox>
                        );
                      })}
                    </SwiperSlideItemList>

                    <SwiperSlideItemPriceContainer>
                      <SwiperSlideItemPriceTitle>
                        {el.dollar}
                      </SwiperSlideItemPriceTitle>
                      <SwiperSlideItemPriceTitle>
                        {el.soum}
                      </SwiperSlideItemPriceTitle>
                    </SwiperSlideItemPriceContainer>

                    <SwiperSlideItemPriceLink
                      target="_blank"
                      href="https://t.me/Shams_markaz_admin"
                    >
                      {contactUs[language]}
                    </SwiperSlideItemPriceLink>
                  </SwiperSlideItemContent>
                </SwiperSlideItem>
              </SwiperSlideStyled>
            );
          })}
        </SwiperList>

        <PremiumCoursesSectionText>
          {lessonType[`${language}`]}
        </PremiumCoursesSectionText>
      </div>
    </PremiumCoursesSection>
  );
};

export default PremiumCourses;
