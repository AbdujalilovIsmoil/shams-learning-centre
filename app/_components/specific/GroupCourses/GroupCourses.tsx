"use client";

import { Language } from "@/app/types";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { contactUs, groupCourses, groupNotice, title } from "./data";
import {
  SquareIcon,
  CarouselArrowLeftIcon,
  CarouselArrowRightIcon,
} from "@/public/images/svg";
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
  SwiperGroupCourseContentSubText,
  SwiperGroupCourseNavigationButton,
  SwiperGroupCourseNavigationContainer,
  SwiperGroupCourseTextsPriceContainer,
  SwiperGroupCourseNavigationButtonIcon,
  SwiperGroupCourseNavigationButtonContainer,
} from "./style";

const GroupCourses = () => {
  const pathName = usePathname();
  const language = (pathName.split("/")[1] || "uz") as Language;

  return (
    <GroupCoursesSection>
      <div className="container">
        <GroupCoursesTitle data-aos="fade-down">
          {title[`${language}` as Language].title}:
        </GroupCoursesTitle>

        <Swiper
          loop
          grabCursor
          spaceBetween={16}
          slidesPerView={4}
          className="swiper"
          modules={[Autoplay, Navigation]}
          dir={language === "ar" ? "rtl" : "ltr"}
          autoplay={{
            delay: 2500,
          }}
          navigation={{
            prevEl: ".left",
            nextEl: ".right",
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
                          alt="square icon"
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
                <SwiperGroupCourseNavigationButtonContainer className="right">
                  <SwiperGroupCourseNavigationButton>
                    <SwiperGroupCourseNavigationButtonIcon
                      width={60}
                      height={60}
                      alt="arrow left icon"
                      src={CarouselArrowRightIcon}
                    />
                  </SwiperGroupCourseNavigationButton>
                </SwiperGroupCourseNavigationButtonContainer>
                <SwiperGroupCourseNavigationButtonContainer className="left">
                  <SwiperGroupCourseNavigationButton>
                    <SwiperGroupCourseNavigationButtonIcon
                      width={60}
                      height={60}
                      alt="arrow left icon"
                      src={CarouselArrowLeftIcon}
                    />
                  </SwiperGroupCourseNavigationButton>
                </SwiperGroupCourseNavigationButtonContainer>
              </>
            ) : (
              <>
                <SwiperGroupCourseNavigationButtonContainer className="left">
                  <SwiperGroupCourseNavigationButton>
                    <SwiperGroupCourseNavigationButtonIcon
                      width={60}
                      height={60}
                      alt="arrow left icon"
                      src={CarouselArrowLeftIcon}
                    />
                  </SwiperGroupCourseNavigationButton>
                </SwiperGroupCourseNavigationButtonContainer>
                <SwiperGroupCourseNavigationButtonContainer className="right">
                  <SwiperGroupCourseNavigationButton>
                    <SwiperGroupCourseNavigationButtonIcon
                      width={60}
                      height={60}
                      alt="arrow left icon"
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
