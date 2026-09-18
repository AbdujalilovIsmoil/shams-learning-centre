"use client";

import Image from "next/image";
import styled from "styled-components";
import { Button } from "@/app/_components";

export const GroupCoursesSection = styled.section`
  padding: 60px 0;
  background-color: ${({ theme }) => theme.colors.group_course_color};

  .swiper-slide {
    height: auto;
  }

  @media (max-width: 1500px) {
    padding: 50px 0;
  }

  @media (max-width: 768px) {
    padding: 40px 0;
  }

  @media (max-width: 480px) {
    padding: 30px 0;
  }
`;

export const GroupCoursesTitle = styled.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: 120%;
  text-align: center;
  margin-bottom: 40px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.directive_title_color};

  @media (max-width: 1500px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
  }
`;

export const SwiperGroupCourse = styled.div`
  height: 100%;
  display: flex;
  padding: 20px;
  border-radius: 12.8px;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0px 12.05px 30.12px 0px
    ${({ theme }) => theme.colors.group_course_swiper_color};

  &:hover {
    transform: translateY(-6px);
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const SwiperGroupCoursesItemImage = styled(Image)`
  width: 100%;
  height: 180px;
  display: block;
  object-fit: cover;
  margin-bottom: 15px;
  border-radius: 12.8px;

  @media (max-width: 1500px) {
    height: 160px;
  }

  @media (max-width: 768px) {
    height: 150px;
  }

  @media (max-width: 480px) {
    height: 140px;
  }
`;

export const SwiperGroupCourseContent = styled.div`
  flex-grow: 1;
  display: flex;
  padding: 10px 0;
  flex-direction: column;
`;

export const SwiperGroupCourseStudents = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const SwiperGroupCourseStudentsIcon = styled(Image)`
  width: 14px;
  height: 14px;
`;

export const SwiperGroupCourseStudentsText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.directive_item_text_color};
`;

export const SwiperGroupCourseTexts = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const SwiperGroupCourseContentTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.group_course_swiper_title_color};

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const SwiperGroupCourseContentText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 130%;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.directive_item_text_color};

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const SwiperGroupCourseContentSubText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 125%;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.directive_item_text_color};

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const SwiperGroupCourseTextsPrice = styled.p`
  font-weight: 700;
  margin-top: auto;
  text-align: right;
  font-size: 15.36px;
  color: ${({ theme }) => theme.colors.light_green_color};

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const SwiperGroupCourseNavigationContainer = styled.div`
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  padding: 36px 0px;
  align-items: center;
  justify-content: space-between;
`;

export const SwiperGroupCourseNavigationBox = styled.div`
  gap: 60px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

export const SwiperGroupCourseNavigationButtonContainer = styled.div`
  width: 135px;
  height: 135px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0px 10px 48px 0px
    ${({ theme }) => theme.colors.swiper_navigation_container_color};

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

export const SwiperGroupCourseNavigationButton = styled(Button)`
  width: 100px;
  height: 100px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0px 10px 48px 0px
    ${({ theme }) => theme.colors.swiper_navigation_container_color};

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

export const SwiperGroupCourseNavigationButtonIcon = styled(Image)`
  width: 80px;
  height: 80px;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
  }
`;

export const SwiperGroupCourseNavigationLink = styled.a`
  font-size: 16px;
  font-weight: 600;
  line-height: 100%;
  padding: 18px 125px;
  border-radius: 10px;
  display: inline-block;
  color: ${({ theme }) => theme.colors.light};
  transition: color 0.15s linear, background-color 0.15s linear;
  background-color: ${({ theme }) => theme.colors.swiper_group_link_color};
  border: 1px solid ${({ theme }) => theme.colors.swiper_group_link_color};

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.swiper_group_link_color};
  }

  @media (max-width: 768px) {
    padding: 14px 80px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
    padding: 12px 60px;
  }
`;

export const SwiperGroupCourseText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.swiper_group_text_color};
`;

export const SwiperGroupCourseTextsPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
