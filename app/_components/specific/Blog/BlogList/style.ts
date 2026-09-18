"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

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
