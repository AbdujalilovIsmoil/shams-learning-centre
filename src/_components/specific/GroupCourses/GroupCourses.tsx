
import { useRef } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Language } from "@/types";
import { getLabels, getSwiperA11y } from "@/a11y/labels";
import { usePathname } from "@/lib/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import { contactUs, groupCourses, groupNotice, title } from "./data";
import {
  SquareIcon,
  CarouselArrowLeftIcon,
  CarouselArrowRightIcon,
} from "@/assets/images/svg";
import {
  GroupCoursesTitle,
  SwiperGroupCourse,
  GroupCoursesSection,
  SwiperGroupCourseText,
  SwiperGroupCourseTexts,
  SwiperGroupCourseContent,
  SwiperGroupCourseStudents,
  SwiperGroupCoursesItemImage,
  SwiperGroupCourseTextsPrice,
  SwiperGroupCourseContentText,
  SwiperGroupCourseStudentsText,
  SwiperGroupCourseContentTitle,
  SwiperGroupCourseStudentsIcon,
  SwiperGroupCourseNavigationBox,
  SwiperGroupCourseNavigationLink,
  SwiperGroupCourseNavigationButton,
  SwiperGroupCourseNavigationContainer,
  SwiperGroupCourseNavigationButtonIcon,
  SwiperGroupCourseNavigationButtonContainer,
  SwiperGroupCourseContentSubText,
  SwiperGroupCourseTextsPriceContainer,
} from "./style";

const GroupCourses = () => {
  const pathName = usePathname();
  const language = (pathName.split("/")[1] || "uz") as Language;
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <GroupCoursesSection>
      <div className="container">
        <GroupCoursesTitle data-aos="fade-down">
          {title[`${language}` as Language].title}:
        </GroupCoursesTitle>

        <Swiper
          loop
          grabCursor
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={16}
          slidesPerView={4}
          className="swiper"
          modules={[A11y, Autoplay]}
              a11y={getSwiperA11y(language)}
          dir={language === "ar" ? "rtl" : "ltr"}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {groupCourses[`${language}` as Language].map((el) => {
            return (
              <SwiperSlide key={el.id}>
                <SwiperGroupCourse>
                  <SwiperGroupCoursesItemImage
                    width={180}
                    height={180}
                    src={el.image}
                    alt={el.courseType}
                  />

                  <SwiperGroupCourseTexts>
                    <SwiperGroupCourseContent>
                      <SwiperGroupCourseStudents>
                        <SwiperGroupCourseStudentsIcon
                          width={14}
                          height={14}
                          src={SquareIcon}
                          alt=""
                        />
                        <SwiperGroupCourseStudentsText>
                          {el.students}
                        </SwiperGroupCourseStudentsText>
                      </SwiperGroupCourseStudents>
                      <SwiperGroupCourseContentTitle>
                        {el.courseType}
                      </SwiperGroupCourseContentTitle>
                      <SwiperGroupCourseContentText>
                        {el.text}
                      </SwiperGroupCourseContentText>
                      <SwiperGroupCourseContentSubText>
                        {el.alert}
                      </SwiperGroupCourseContentSubText>
                    </SwiperGroupCourseContent>

                    <SwiperGroupCourseTextsPriceContainer>
                      <SwiperGroupCourseTextsPrice>
                        {el.dollar}
                      </SwiperGroupCourseTextsPrice>
                      <SwiperGroupCourseTextsPrice>
                        {el.soum}
                      </SwiperGroupCourseTextsPrice>
                    </SwiperGroupCourseTextsPriceContainer>
                  </SwiperGroupCourseTexts>
                </SwiperGroupCourse>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <SwiperGroupCourseNavigationContainer>
          <SwiperGroupCourseNavigationBox>
            {language === "ar" ? (
              <>
                <SwiperGroupCourseNavigationButtonContainer>
                  <SwiperGroupCourseNavigationButton type="button" aria-label={getLabels(language).next} onClick={() => swiperRef.current?.slideNext()}>
                    <SwiperGroupCourseNavigationButtonIcon
                      width={60}
                      height={60}
                      alt=""
                      src={CarouselArrowRightIcon}
                    />
                  </SwiperGroupCourseNavigationButton>
                </SwiperGroupCourseNavigationButtonContainer>
                <SwiperGroupCourseNavigationButtonContainer>
                  <SwiperGroupCourseNavigationButton type="button" aria-label={getLabels(language).prev} onClick={() => swiperRef.current?.slidePrev()}>
                    <SwiperGroupCourseNavigationButtonIcon
                      width={60}
                      height={60}
                      alt=""
                      src={CarouselArrowLeftIcon}
                    />
                  </SwiperGroupCourseNavigationButton>
                </SwiperGroupCourseNavigationButtonContainer>
              </>
            ) : (
              <>
                <SwiperGroupCourseNavigationButtonContainer>
                  <SwiperGroupCourseNavigationButton type="button" aria-label={getLabels(language).prev} onClick={() => swiperRef.current?.slidePrev()}>
                    <SwiperGroupCourseNavigationButtonIcon
                      width={60}
                      height={60}
                      alt=""
                      src={CarouselArrowLeftIcon}
                    />
                  </SwiperGroupCourseNavigationButton>
                </SwiperGroupCourseNavigationButtonContainer>
                <SwiperGroupCourseNavigationButtonContainer>
                  <SwiperGroupCourseNavigationButton type="button" aria-label={getLabels(language).next} onClick={() => swiperRef.current?.slideNext()}>
                    <SwiperGroupCourseNavigationButtonIcon
                      width={60}
                      height={60}
                      alt=""
                      src={CarouselArrowRightIcon}
                    />
                  </SwiperGroupCourseNavigationButton>
                </SwiperGroupCourseNavigationButtonContainer>
              </>
            )}
          </SwiperGroupCourseNavigationBox>
          <SwiperGroupCourseNavigationBox>
            <SwiperGroupCourseNavigationLink
              target="_blank"
 rel="noopener noreferrer"
              href="https://t.me/Shams_markaz_admin"
            >
              {contactUs[language]}
            </SwiperGroupCourseNavigationLink>
          </SwiperGroupCourseNavigationBox>
        </SwiperGroupCourseNavigationContainer>

        <SwiperGroupCourseText>{groupNotice[language]}</SwiperGroupCourseText>
      </div>
    </GroupCoursesSection>
  );
};

export default GroupCourses;
