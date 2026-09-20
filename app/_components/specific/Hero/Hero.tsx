"use client";

import { useEffect, useState } from "react";
import { CountUp } from "@/app/hooks";
import { Language } from "@/app/types";
import { usePathname } from "next/navigation";
import { HeroGirlAndBoyImage, StarImage } from "@/public/images/png";
import {
  EmailIcon,
  ChartIcon,
  CalendarIcon,
  ArrowRightIcon,
} from "@/public/images/svg";
import { DEFAULT_SITE_STATS, fetchSiteStats } from "./api";
import {
  whyData,
  heroText,
  heroTitle,
  activities,
  sendRequest,
  translations,
} from "./data";
import {
  HeroBox,
  HeroCaseBox,
  HeroContent,
  HeroActivity,
  HeroStarIcon,
  HeroContainer,
  HeroBottomBox,
  HeroBackground,
  HeroActivities,
  HeroContentText,
  HeroContentLink,
  HeroFlexCaseBox,
  HeroCaseBoxLink,
  HeroContentTitle,
  HeroActivityText,
  HeroCaseBoxTitle,
  HeroActivityTitle,
  HeroTeacherImages,
  HeroBottomWrapper,
  HeroBottomBoxTitle,
  HeroBackgroundImage,
  HeroBottomContainer,
  HeroContentLinkIcon,
  HeroCaseBoxChartIcon,
  HeroFlexCaseBoxImage,
  HeroActivityBackground,
  HeroFlexCaseBoxContent,
  HeroFlexCaseBoxContainer,
  HeroCaseBoxChartContainer,
  HeroFlexCaseBoxContentText,
  HeroFlexCaseBoxContentTitle,
  HeroFlexCaseBoxImageContainer,
  HeroCaseBoxChartLightContainer,
} from "./style";

const Hero = () => {
  const pathName = usePathname();
  const language = pathName.split("/")[1];

  // Admin panel "Statistika" sahifasida kiritilgan raqamlar — dastlab
  // standart qiymatlar bilan ko'rsatiladi, so'rov tugagach yangilanadi.
  const [stats, setStats] = useState(DEFAULT_SITE_STATS);

  useEffect(() => {
    let active = true;

    fetchSiteStats().then((data) => {
      if (active) setStats(data);
    });

    return () => {
      active = false;
    };
  }, []);

  return (
    <HeroBackground id="home">
      <HeroBackgroundImage>
        <div className="container">
          <HeroContainer>
            <HeroBox>
              <HeroContent>
                <HeroContentTitle data-aos="fade-up">
                  {heroTitle[`${language}` as Language]}
                </HeroContentTitle>
                <HeroContentText data-aos="fade-up">
                  {heroText[`${language}` as Language]}
                </HeroContentText>
                <HeroContentLink
                  role="button"
                  target="_blank"
                  data-aos="fade-up"
                  href="https://t.me/Shams_markaz_admin"
                >
                  {sendRequest[`${language}` as Language]}
                  <HeroContentLinkIcon
                    width={30}
                    height={30}
                    src={ArrowRightIcon}
                    alt="arrow right icon"
                  />
                </HeroContentLink>
              </HeroContent>
            </HeroBox>
            <HeroBox>
              <HeroFlexCaseBoxContainer>
                <HeroFlexCaseBox
                  role="button"
                  href="#courses"
                  data-aos="zoom-in"
                >
                  <HeroFlexCaseBoxImageContainer $color={"#23bdee"}>
                    <HeroFlexCaseBoxImage
                      width={28}
                      height={28}
                      src={CalendarIcon}
                      alt="calendar icon"
                    />
                  </HeroFlexCaseBoxImageContainer>

                  <HeroFlexCaseBoxContent>
                    <HeroFlexCaseBoxContentTitle>
                      {translations[`${language}` as Language].lessons}
                    </HeroFlexCaseBoxContentTitle>
                    <HeroFlexCaseBoxContentText>
                      {translations[`${language}` as Language].convenientTime}
                    </HeroFlexCaseBoxContentText>
                  </HeroFlexCaseBoxContent>
                </HeroFlexCaseBox>
                <HeroFlexCaseBox
                  role="button"
                  href="#courses"
                  data-aos="zoom-in"
                >
                  <HeroFlexCaseBoxImageContainer $color={"#F88C3D"}>
                    <HeroFlexCaseBoxImage
                      width={28}
                      height={28}
                      src={EmailIcon}
                      alt="email icon"
                    />
                  </HeroFlexCaseBoxImageContainer>

                  <HeroFlexCaseBoxContent>
                    <HeroFlexCaseBoxContentTitle>
                      {translations[`${language}` as Language].trainings}
                    </HeroFlexCaseBoxContentTitle>
                    <HeroFlexCaseBoxContentText>
                      {translations[`${language}` as Language].platform}
                    </HeroFlexCaseBoxContentText>
                  </HeroFlexCaseBoxContent>
                </HeroFlexCaseBox>
                <HeroCaseBox
                  target="_blank"
                  data-aos="zoom-in"
                  href="https://t.me/Shams_markaz_admin"
                >
                  <HeroCaseBoxTitle>
                    {translations[`${language}` as Language].onlineLessons}
                  </HeroCaseBoxTitle>
                  <HeroCaseBoxLink type="button">
                    {translations[`${language}` as Language].enrollCourse}
                  </HeroCaseBoxLink>
                </HeroCaseBox>
              </HeroFlexCaseBoxContainer>

              <HeroCaseBoxChartContainer
                target="_blank"
                data-aos="zoom-in"
                href={"https://t.me/shams_markaz_natija"}
              >
                <HeroCaseBoxChartLightContainer>
                  <HeroCaseBoxChartIcon
                    width={18}
                    height={24}
                    src={ChartIcon}
                    alt="chart icon"
                  />
                </HeroCaseBoxChartLightContainer>
              </HeroCaseBoxChartContainer>
              <HeroTeacherImages
                width={1200}
                height={1200}
                data-aos="fade-up"
                alt="teachers images"
                src={HeroGirlAndBoyImage}
              />
            </HeroBox>
          </HeroContainer>
        </div>

        <HeroActivityBackground>
          <div className="container">
            <HeroActivities>
              <HeroActivity>
                <HeroActivityTitle>
                  <CountUp key={stats.studentsCount} end={stats.studentsCount} start={1}>
                    {({ count }) => {
                      return <>{count}+</>;
                    }}
                  </CountUp>
                </HeroActivityTitle>
                <HeroActivityText>
                  {activities.students_count[`${language}` as Language]}
                </HeroActivityText>
              </HeroActivity>
              <HeroActivity>
                <HeroActivityTitle>
                  <CountUp key={stats.c1Students} end={stats.c1Students} start={1}>
                    {({ count }) => {
                      return <>{count}+</>;
                    }}
                  </CountUp>
                </HeroActivityTitle>
                <HeroActivityText>
                  {activities.c1_students[`${language}` as Language]}
                </HeroActivityText>
              </HeroActivity>
              <HeroActivity>
                <HeroActivityTitle>
                  <CountUp key={stats.b1Students} end={stats.b1Students} start={1}>
                    {({ count }) => {
                      return <>{count}+</>;
                    }}
                  </CountUp>
                </HeroActivityTitle>
                <HeroActivityText>
                  {activities.b1_students[`${language}` as Language]}
                </HeroActivityText>
              </HeroActivity>
              <HeroActivity>
                <HeroActivityTitle>
                  <CountUp key={stats.teachersTrained} end={stats.teachersTrained} start={1}>
                    {({ count }) => {
                      return <>{count}+</>;
                    }}
                  </CountUp>
                </HeroActivityTitle>
                <HeroActivityText>
                  {activities.teachers_trained[`${language}` as Language]}
                </HeroActivityText>
              </HeroActivity>
            </HeroActivities>
          </div>
        </HeroActivityBackground>
      </HeroBackgroundImage>

      <HeroBottomWrapper>
        <HeroStarIcon src={StarImage} alt="star icon" height={90} width={90} />
        <HeroBottomContainer>
          <HeroBottomBox>
            <HeroBottomBoxTitle>
              {whyData.why_exactly[`${language}` as Language]}
            </HeroBottomBoxTitle>
          </HeroBottomBox>
          <HeroBottomBox>
            <HeroBottomBoxTitle>
              {whyData.education_center[`${language}` as Language]}
            </HeroBottomBoxTitle>
          </HeroBottomBox>
        </HeroBottomContainer>
      </HeroBottomWrapper>
    </HeroBackground>
  );
};

export default Hero;
