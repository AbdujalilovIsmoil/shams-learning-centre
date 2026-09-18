"use client";

import Image from "next/image";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const PremiumCoursesSection = styled.section`
  padding: 50px 0;
  margin-bottom: 80px;
  scroll-margin-top: 100px;
  background-color: ${({ theme }) => theme.colors.premium_course_section_color};

  @media (max-width: 768px) {
    padding: 40px 0;
    margin-bottom: 60px;
    scroll-margin-top: 60px;
  }

  @media (max-width: 480px) {
    padding: 30px 0;
    margin-bottom: 40px;
  }
`;

export const PremiumCoursesContent = styled.div`
  max-width: 830px;
  text-align: center;
  margin: 0 auto 30px auto;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const PremiumCoursesContentTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 10px;
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

export const PremiumCoursesContentSpan = styled.span`
  color: ${({ theme }) => theme.colors.directive_span_color};
`;

export const PremiumCoursesContentText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.premium_course_content_text_color};

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const SwiperList = styled(Swiper)`
  width: 100%;
  margin-bottom: 24px;

  .swiper-wrapper {
    display: flex;
    align-items: stretch;
  }

  .swiper-slide {
    display: flex;
    height: auto;
  }
`;

export const SwiperSlideStyled = styled(SwiperSlide)`
  box-sizing: border-box;
  height: auto !important;
  display: flex !important;
`;

export const SwiperSlideItem = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  overflow: hidden;
  border-radius: 16px;
  flex-direction: column;
  transition: transform 0.2s ease;
  box-shadow: 0 4px 12px
    ${({ theme }) => theme.colors.swiper_slide_background_color};
  background-color: ${({ theme }) => theme.colors.swiper_slide_item_color};

  &:hover {
    transform: translateY(-6px);
  }
`;

export const SwiperSlideItemImage = styled(Image)`
  width: 100%;
  height: 265px;
  display: block;
  object-fit: cover;

  @media (max-width: 1500px) {
    height: 220px;
  }

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }
`;

export const SwiperSlideItemContent = styled.div`
  flex: 1;
  display: flex;
  padding: 16px;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 14px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const SwiperSlideItemContentTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 130%;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.swiper_group_link_color};

  @media (max-width: 1500px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const SwiperSlideItemList = styled.ul`
  gap: 12px;
  flex-grow: 1;
  display: flex;
  margin-bottom: 36px;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const SwiperSlideItemBox = styled.li`
  padding-left: 30px;
  position: relative;

  &::before {
    top: 25%;
    left: 10px;
    width: 5px;
    content: "";
    height: 5px;
    position: absolute;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.swiper_group_link_color};
  }
`;

export const SwiperSlideItemText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.swiper_group_link_color};

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const SwiperSlideItemPriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  justify-content: space-between;

  @media (max-width: 480px) {
    gap: 6px;
  }
`;

export const SwiperSlideItemPriceTitle = styled.h2`
  font-weight: 600;
  line-height: 130%;
  font-size: 18.67px;
  color: ${({ theme }) => theme.colors.price_title_color};

  @media (max-width: 768px) {
    font-size: 17px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const SwiperSlideItemPriceLink = styled.a`
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  margin-top: auto;
  text-align: center;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.price_link_color};
  border: 3px solid ${({ theme }) => theme.colors.price_link_color};

  &:hover {
    color: ${({ theme }) => theme.colors.light};
    background-color: ${({ theme }) => theme.colors.price_link_color};
  }

  @media (max-width: 768px) {
    padding: 14px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 14px;
  }
`;

export const PremiumCoursesSectionText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 130%;
  padding-left: 30px;
  position: relative;
  color: ${({ theme }) => theme.colors.premium_course_section_text_color};

  &::before {
    content: "";
    position: absolute;
    left: 10px;
    top: 30%;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${({ theme }) =>
      theme.colors.premium_course_section_text_color};
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
