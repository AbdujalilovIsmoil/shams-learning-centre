"use client";

import Link from "next/link";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import NavigationBase from "../../../ui/NavigationBase";

export const BlogHomeSection = styled.section`
  padding: 60px 0;
  margin-bottom: 80px;
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

  @media (max-width: 768px) {
    padding: 40px 0;
    margin-bottom: 60px;
  }

  @media (max-width: 480px) {
    padding: 30px 0;
    margin-bottom: 40px;
  }
`;

export const BlogHomeHeader = styled.div`
  max-width: 720px;
  text-align: center;
  margin: 0 auto 48px auto;

  @media (max-width: 768px) {
    margin: 0 auto 32px auto;
  }
`;

export const BlogHomeBadge = styled.span`
  font-size: 14px;
  font-weight: 600;
  display: inline-block;
  padding: 8px 20px;
  border-radius: 50px;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.light_green_color};
  background-color: ${({ theme }) => theme.colors.premium_course_section_color};

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 16px;
    margin-bottom: 14px;
  }
`;

export const BlogHomeTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 14px;
  color: ${({ theme }) => theme.colors.directive_title_color};

  @media (max-width: 1500px) {
    font-size: 34px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const BlogHomeSubtitle = styled.p`
  font-size: 17px;
  font-weight: 400;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.premium_course_content_text_color};

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const BlogHomeGrid = styled.div`
  gap: 28px;
  display: grid;
  margin-bottom: 44px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    gap: 20px;
    grid-template-columns: 1fr;
  }
`;

export const BlogHomeCarouselWrapper = styled.div`
  position: relative;
  margin-bottom: 44px;
`;

export const BlogHomeNavigations = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 32px;
`;

export const BlogHomeNavigation = styled(NavigationBase)`
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

export const BlogHomeNavigationImage = styled(Image)`
  height: 18px;
  width: auto;

  @media (max-width: 768px) {
    height: 15px;
  }
`;

export const BlogHomePagination = styled.div`
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

export const BlogHomeCard = styled.article`
  display: flex;
  overflow: hidden;
  border-radius: 18px;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0 4px 16px ${({ theme }) => theme.colors.swiper_slide_background_color};

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px
      ${({ theme }) => theme.colors.swiper_navigation_container_color};
  }
`;

export const BlogHomeCardImageWrapper = styled.div`
  width: 100%;
  height: 210px;
  overflow: hidden;
  position: relative;

  @media (max-width: 480px) {
    height: 190px;
  }
`;

export const BlogHomeCardImageTrack = styled.div<{ $index: number; $count: number }>`
  height: 100%;
  display: flex;
  transition: transform 0.5s ease;
  width: ${({ $count }) => $count * 100}%;
  transform: ${({ $index, $count }) =>
    `translateX(-${(100 / $count) * $index}%)`};
`;

export const BlogHomeCardImageSlide = styled.div<{ $count: number }>`
  height: 100%;
  flex-shrink: 0;
  position: relative;
  width: ${({ $count }) => 100 / $count}%;
`;

export const BlogHomeCardImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.35s ease;

  ${BlogHomeCard}:hover & {
    transform: scale(1.06);
  }
`;

export const BlogHomeCardImageNav = styled.button`
  top: 50%;
  z-index: 3;
  width: 32px;
  height: 32px;
  display: flex;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  align-items: center;
  position: absolute;
  justify-content: center;
  transform: translateY(-50%);
  transition: background-color 0.2s ease, opacity 0.2s ease;
  background-color: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(2px);
  opacity: 0;

  ${BlogHomeCard}:hover & {
    opacity: 1;
  }

  &:hover {
    background-color: rgba(15, 23, 42, 0.65);
  }

  &.blog-home-card-image-prev {
    left: 10px;
  }

  &.blog-home-card-image-next {
    right: 10px;
  }

  @media (max-width: 1024px) {
    opacity: 1;
    width: 28px;
    height: 28px;
  }
`;

export const BlogHomeCardImageNavIcon = styled(Image)`
  width: 14px;
  height: 14px;
  filter: brightness(0) invert(1);

  @media (max-width: 480px) {
    width: 12px;
    height: 12px;
  }
`;

export const BlogHomeCardImageDots = styled.div`
  left: 0;
  right: 0;
  bottom: 12px;
  z-index: 3;
  gap: 5px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

export const BlogHomeCardImageDot = styled.span<{ $active?: boolean }>`
  width: ${({ $active }) => ($active ? "16px" : "6px")};
  height: 6px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${({ $active }) =>
    $active ? "#fff" : "rgba(255, 255, 255, 0.55)"};
`;

export const BlogHomeCardCategory = styled.span`
  top: 16px;
  left: 16px;
  font-size: 13px;
  font-weight: 600;
  position: absolute;
  padding: 6px 16px;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.light_green_color};
`;

export const BlogHomeCardContent = styled.div`
  flex: 1;
  display: flex;
  padding: 22px;
  flex-direction: column;

  @media (max-width: 480px) {
    padding: 18px;
  }
`;

export const BlogHomeCardMeta = styled.span`
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.thin_gray};
`;

export const BlogHomeCardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  overflow: hidden;
  line-height: 135%;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: ${({ theme }) => theme.colors.directive_title_color};

  a {
    color: inherit;
  }
`;

export const BlogHomeCardExcerpt = styled.p`
  flex: 1;
  font-size: 15px;
  overflow: hidden;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: ${({ theme }) => theme.colors.swiper_group_text_color};
`;

export const BlogHomeCardLink = styled(Link)`
  gap: 8px;
  display: flex;
  font-size: 15px;
  font-weight: 600;
  margin-top: auto;
  width: fit-content;
  align-items: center;
  transition: gap 0.2s ease;
  color: ${({ theme }) => theme.colors.price_link_color};

  &:hover {
    gap: 14px;
  }
`;

export const BlogHomeCardLinkIcon = styled(Image)`
  width: 18px;
  height: 18px;
`;

export const BlogHomeFooter = styled.div`
  display: flex;
  justify-content: center;
`;

export const BlogHomeViewAllLink = styled(Link)`
  gap: 10px;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  padding: 16px 36px;
  align-items: center;
  border-radius: 50px;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.light_green_color};

  &:hover {
    gap: 16px;
    transform: translateY(-2px);
    box-shadow: 0 12px 24px ${({ theme }) => theme.colors.premium_course_section_color};
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 14px 24px;
    font-size: 15px;
  }
`;

export const BlogHomeViewAllIcon = styled(Image)`
  width: 18px;
  height: 18px;
`;

export const BlogHomeEmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  margin-bottom: 44px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0 4px 16px ${({ theme }) => theme.colors.swiper_slide_background_color};
`;

export const BlogHomeEmptyTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.directive_title_color};
`;

export const BlogHomeEmptyText = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.thin_gray};
`;

const shimmer = keyframes`
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
`;

export const BlogHomeSkeletonCard = styled.div`
  overflow: hidden;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0 4px 16px ${({ theme }) => theme.colors.swiper_slide_background_color};
`;

export const BlogHomeSkeletonImage = styled.div`
  width: 100%;
  height: 210px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.group_course_color} 0%,
    ${({ theme }) => theme.colors.language_option_color} 50%,
    ${({ theme }) => theme.colors.group_course_color} 100%
  );
  background-size: 800px 100%;
  animation: ${shimmer} 1.5s infinite linear;

  @media (max-width: 480px) {
    height: 190px;
  }
`;

export const BlogHomeSkeletonBody = styled.div`
  padding: 22px;

  @media (max-width: 480px) {
    padding: 18px;
  }
`;

export const BlogHomeSkeletonLine = styled.div<{ $width?: string; $height?: string }>`
  width: ${({ $width }) => $width ?? "100%"};
  height: ${({ $height }) => $height ?? "14px"};
  border-radius: 6px;
  margin-bottom: 12px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.group_course_color} 0%,
    ${({ theme }) => theme.colors.language_option_color} 50%,
    ${({ theme }) => theme.colors.group_course_color} 100%
  );
  background-size: 800px 100%;
  animation: ${shimmer} 1.5s infinite linear;

  &:last-child {
    margin-bottom: 0;
  }
`;
