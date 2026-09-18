"use client";

import Link from "next/link";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

export const BlogSection = styled.section`
  padding: 160px 0 120px 0;

  @media (max-width: 1500px) {
    padding: 150px 0 100px 0;
  }

  @media (max-width: 768px) {
    padding: 120px 0 70px 0;
  }

  @media (max-width: 480px) {
    padding: 100px 0 50px 0;
  }
`;

export const BlogHero = styled.div`
  max-width: 760px;
  text-align: center;
  margin: 0 auto 70px auto;

  @media (max-width: 768px) {
    margin: 0 auto 50px auto;
  }

  @media (max-width: 480px) {
    margin: 0 auto 36px auto;
  }
`;

export const BlogBadge = styled.span`
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

export const BlogHeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 16px;
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

export const BlogHeroSubtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.premium_course_content_text_color};

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const BlogGrid = styled.div`
  gap: 28px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const BlogCard = styled.article`
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

export const BlogCardImageWrapper = styled.div`
  width: 100%;
  height: 230px;
  overflow: hidden;
  position: relative;

  @media (max-width: 1500px) {
    height: 210px;
  }

  @media (max-width: 480px) {
    height: 190px;
  }
`;

export const BlogCardImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.35s ease;

  ${BlogCard}:hover & {
    transform: scale(1.06);
  }
`;

export const BlogCardCategory = styled.span`
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

export const BlogCardContent = styled.div`
  flex: 1;
  display: flex;
  padding: 22px;
  flex-direction: column;

  @media (max-width: 480px) {
    padding: 18px;
  }
`;

export const BlogCardMeta = styled.span`
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.thin_gray};
`;

export const BlogCardTitle = styled.h3`
  font-size: 21px;
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

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const BlogCardExcerpt = styled.p`
  flex: 1;
  font-size: 15px;
  overflow: hidden;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: ${({ theme }) => theme.colors.swiper_group_text_color};
`;

export const BlogCardLink = styled(Link)`
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

export const BlogCardLinkIcon = styled(Image)`
  width: 18px;
  height: 18px;
`;

/* ---------------------------- Filter bar ---------------------------- */

export const FilterBarWrap = styled.div`
  display: flex;
  padding: 22px 24px;
  margin-bottom: 44px;
  border-radius: 18px;
  flex-direction: column;
  gap: 18px;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0 4px 16px ${({ theme }) => theme.colors.swiper_slide_background_color};

  @media (max-width: 768px) {
    padding: 18px;
    margin-bottom: 32px;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 16px;

  @media (max-width: 640px) {
    gap: 14px;
  }
`;

export const ResultsBar = styled.div`
  display: flex;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.language_option_color};
`;

export const ResultsCount = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.thin_gray};
`;

export const ResetButton = styled.button`
  height: 46px;
  font-size: 14px;
  font-weight: 600;
  padding: 0 18px;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.price_link_color};
  border: 1.5px solid ${({ theme }) => theme.colors.price_link_color};
  background-color: transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.light};
    background-color: ${({ theme }) => theme.colors.price_link_color};
  }
`;

/* ------------------------------ Select ------------------------------ */

export const SelectRoot = styled.div`
  position: relative;
  min-width: 200px;

  @media (max-width: 640px) {
    min-width: 0;
    width: 100%;
  }
`;

export const SelectLabel = styled.span`
  display: block;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.thin_gray};
`;

export const SelectTrigger = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  height: 46px;
  display: flex;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 0 16px;
  align-items: center;
  border-radius: 10px;
  text-align: left;
  justify-content: space-between;
  transition: border-color 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.directive_title_color};
  border: 1.5px solid
    ${({ $isOpen, theme }) =>
      $isOpen ? theme.colors.price_link_color : theme.colors.language_option_color};

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.price_link_color};
  }
`;

export const SelectChevron = styled.svg<{ $isOpen: boolean }>`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  transition: transform 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.chevron_icon_color};
  transform: rotate(${({ $isOpen }) => ($isOpen ? "180deg" : "0deg")});
`;

export const SelectPanel = styled.div<{ $isOpen: boolean }>`
  left: 0;
  right: 0;
  top: calc(100% + 8px);
  z-index: 20;
  padding: 8px;
  max-height: 260px;
  overflow-y: auto;
  position: absolute;
  border-radius: 12px;
  transition: all 0.18s ease-in-out;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transform: translateY(${({ $isOpen }) => ($isOpen ? 0 : "-8px")});
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0 16px 32px ${({ theme }) => theme.colors.header_container_box_shadow};
  border: 1px solid ${({ theme }) => theme.colors.language_option_color};
`;

export const SelectOption = styled.button<{ $isActive: boolean }>`
  width: 100%;
  display: block;
  font-size: 14px;
  cursor: pointer;
  padding: 10px 12px;
  text-align: left;
  border-radius: 8px;
  border: none;
  font-weight: ${({ $isActive }) => ($isActive ? 600 : 500)};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.price_link_color : theme.colors.directive_title_color};
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.premium_course_section_color : "transparent"};

  &:hover {
    background-color: ${({ theme }) => theme.colors.premium_course_section_color};
  }
`;

/* ------------------------------- Date -------------------------------- */

export const DateField = styled.div`
  min-width: 180px;

  @media (max-width: 640px) {
    min-width: 0;
    width: 100%;
  }
`;

export const DateFieldLabel = styled.span`
  display: block;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.thin_gray};
`;

export const DateFieldInputWrap = styled.div`
  display: flex;
  height: 46px;
  gap: 10px;
  align-items: center;
  padding: 0 14px;
  border-radius: 10px;
  transition: border-color 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.colors.light};
  border: 1.5px solid ${({ theme }) => theme.colors.language_option_color};

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.price_link_color};
  }
`;

export const DateFieldIcon = styled(Image)`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  opacity: 0.65;
`;

export const DateFieldInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.directive_title_color};

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    opacity: 0.55;
    transition: opacity 0.2s ease-in-out;
  }

  &::-webkit-calendar-picker-indicator:hover {
    opacity: 1;
  }
`;

/* ------------------------------ Empty -------------------------------- */

export const BlogEmptyState = styled.div`
  text-align: center;
  padding: 70px 20px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0 4px 16px ${({ theme }) => theme.colors.swiper_slide_background_color};
`;

export const BlogEmptyTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.directive_title_color};
`;

export const BlogEmptyText = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.thin_gray};
`;

/* ----------------------------- Skeleton ------------------------------- */

const shimmer = keyframes`
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
`;

export const BlogSkeletonCard = styled.div`
  overflow: hidden;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0 4px 16px ${({ theme }) => theme.colors.swiper_slide_background_color};
`;

export const BlogSkeletonImage = styled.div`
  width: 100%;
  height: 230px;
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

export const BlogSkeletonBody = styled.div`
  padding: 22px;

  @media (max-width: 480px) {
    padding: 18px;
  }
`;

export const BlogSkeletonLine = styled.div<{ $width?: string; $height?: string }>`
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
