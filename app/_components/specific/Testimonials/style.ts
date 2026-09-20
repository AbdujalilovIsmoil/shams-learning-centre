"use client";

import Image from "next/image";
import styled from "styled-components";
import NavigationBase from "../../ui/NavigationBase";

export const TestimonialsSection = styled.section`
  padding: 120px 0;
  scroll-margin-top: 100px;

  .swiper {
    width: 100%;
    overflow-x: hidden;
    overflow-y: visible;
    padding-bottom: 8px;
  }

  .swiper-slide {
    height: auto;
    display: flex;
  }

  @media (max-width: 1500px) {
    padding: 100px 0;
  }

  @media (max-width: 768px) {
    padding: 80px 0;
  }

  @media (max-width: 480px) {
    padding: 60px 0;
  }
`;

export const TestimonialsContainer = styled.div``;
export const TestimonialsBox = styled.div``;

export const TestimonialsContent = styled.div`
  width: 100%;
  padding: 0 20px;
  max-width: 850px;
  text-align: center;
  margin: 0 auto 80px auto;

  @media (max-width: 992px) {
    width: 100%;
    max-width: 650px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 56px;
  }
`;

export const TestimonialsContentTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.directive_title_color};

  @media only screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const TestimonialsContentText = styled.p`
  font-size: 20px;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.directive_item_text_color};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const TestimonialsCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 36px 32px 30px;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0 4px 30px 0
    ${({ theme }) => theme.colors.testimonials_content_color};
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &::before {
    top: 0;
    left: 0;
    right: 0;
    content: "";
    height: 4px;
    position: absolute;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.light_green_color},
      ${({ theme }) => theme.colors.testimonials_another_color}
    );
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 40px 0
      ${({ theme }) => theme.colors.testimonials_navigation_hover_color};
  }

  @media (max-width: 768px) {
    padding: 28px 24px 24px;
    border-radius: 18px;
  }
`;

export const TestimonialsQuoteIcon = styled.span`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-bottom: 18px;
  color: ${({ theme }) => theme.colors.light_green_color};
  background-color: ${({ theme }) => theme.colors.premium_course_section_color};

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const TestimonialsCardText = styled.p<{ $expanded: boolean }>`
  flex: 1;
  font-size: 15.5px;
  line-height: 165%;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.testimonials_box_content_text_color};

  ${({ $expanded }) =>
    $expanded
      ? `
    display: block;
  `
      : `
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
    overflow: hidden;
  `}

  @media (max-width: 768px) {
    font-size: 14px;

    ${({ $expanded }) => ($expanded ? "" : "-webkit-line-clamp: 7;")}
  }
`;

// "..." bilan kesib tashlash o'rniga — uzun fikrlarni "Batafsil" tugmasi
// bilan to'liq ochish imkonini beradi.
export const TestimonialsToggleButton = styled.button`
  align-self: flex-start;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  margin-bottom: 14px;
  font-size: 13.5px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.light_green_color};

  &:hover {
    text-decoration: underline;
  }
`;

export const TestimonialsCardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.group_course_color};
`;

export const TestimonialsAvatarImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  flex: none;
`;

export const TestimonialsAvatarFallback = styled.span<{ $bg: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 17px;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ $bg }) => $bg};
`;

export const TestimonialsFooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`;

export const TestimonialsFooterTitle = styled.h3`
  font-weight: 700;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.directive_title_color};
`;

export const TestimonialsFooterList = styled.ul`
  gap: 3px;
  display: flex;
  align-items: center;
`;

export const TestimonialsFooterItem = styled.li<{ $filled: boolean }>`
  display: flex;
  opacity: ${({ $filled }) => ($filled ? 1 : 0.25)};
`;

export const TestimonialsFooterItemImage = styled(Image)`
  width: 15px;
  height: 15px;
`;

export const TestimonialsSkeletonGrid = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const TestimonialsSkeletonCard = styled.div`
  height: 280px;
  border-radius: 24px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.group_course_color} 25%,
    ${({ theme }) => theme.colors.swiper_slide_item_color} 37%,
    ${({ theme }) => theme.colors.group_course_color} 63%
  );
  background-size: 400% 100%;
  animation: testimonials-shine 1.4s ease infinite;

  @keyframes testimonials-shine {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;

export const TestimonialsNavigations = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 44px;
`;

export const TestimonialsNavigation = styled(NavigationBase)`
  width: 56px;
  z-index: 20;
  height: 56px;
  display: flex;
  cursor: pointer;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border: 1px solid ${({ theme }) => theme.colors.group_course_color};
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0px 4px 30px 0px
    ${({ theme }) => theme.colors.testimonials_navigation_color};

  &:hover {
    transform: scale(1.06);
    border-color: ${({ theme }) => theme.colors.light_green_color};
    box-shadow: 0px 6px 40px 0px
      ${({ theme }) => theme.colors.testimonials_navigation_hover_color};
  }

  &:first-child {
    transform: rotate(180deg);
  }

  &:first-child:hover {
    transform: rotate(180deg) scale(1.06);
  }

  @media (max-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;

export const TestimonialsNavigationImage = styled(Image)`
  height: 18px;
  width: auto;

  @media (max-width: 768px) {
    height: 15px;
  }
`;

export const TestimonialsPagination = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    display: block;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.group_course_color};
    opacity: 1;
    transition: all 0.2s ease;
  }

  .swiper-pagination-bullet-active {
    width: 24px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.light_green_color};
  }
`;

export const TestimonialsCarouselWrapper = styled.div`
  position: relative;
  margin-top: 20px;
`;

export const TestimonialsEmpty = styled.p`
  text-align: center;
  padding: 40px 0;
  color: ${({ theme }) => theme.colors.directive_item_text_color};
`;
