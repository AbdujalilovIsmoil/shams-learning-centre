"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export const BlogDetailSection = styled.section`
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

export const BlogDetailBack = styled(Link)`
  gap: 10px;
  display: flex;
  font-size: 15px;
  font-weight: 600;
  width: fit-content;
  margin-bottom: 40px;
  align-items: center;
  transition: gap 0.2s ease;
  color: ${({ theme }) => theme.colors.price_link_color};

  &:hover {
    gap: 16px;
  }

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const BlogDetailBackIcon = styled(Image)<{ $flip?: boolean }>`
  width: 18px;
  height: 18px;
  transform: ${({ $flip }) => ($flip ? "rotate(180deg)" : "none")};
`;

export const BlogDetailHeader = styled.header`
  max-width: 820px;
  margin: 0 auto 40px auto;

  @media (max-width: 768px) {
    margin: 0 auto 30px auto;
  }
`;

export const BlogDetailCategory = styled.span`
  font-size: 13px;
  font-weight: 600;
  display: inline-block;
  padding: 6px 18px;
  border-radius: 50px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.light_green_color};
`;

export const BlogDetailTitle = styled.h1`
  font-size: 42px;
  font-weight: 700;
  line-height: 125%;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.directive_title_color};

  @media (max-width: 1500px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const BlogDetailMeta = styled.div`
  gap: 16px;
  display: flex;
  font-size: 15px;
  font-weight: 500;
  flex-wrap: wrap;
  align-items: center;
  color: ${({ theme }) => theme.colors.thin_gray};
`;

export const BlogDetailCover = styled.div`
  width: 100%;
  height: 480px;
  overflow: hidden;
  max-width: 1100px;
  position: relative;
  margin: 0 auto 50px auto;
  border-radius: 24px;

  @media (max-width: 1500px) {
    height: 420px;
  }

  @media (max-width: 768px) {
    height: 320px;
    border-radius: 16px;
    margin: 0 auto 36px auto;
  }

  @media (max-width: 480px) {
    height: 220px;
  }
`;

export const BlogDetailCoverTrack = styled.div<{ $index: number; $count: number }>`
  height: 100%;
  display: flex;
  transition: transform 0.5s ease;
  width: ${({ $count }) => $count * 100}%;
  transform: ${({ $index, $count }) =>
    `translateX(-${(100 / $count) * $index}%)`};
`;

export const BlogDetailCoverSlide = styled.div<{ $count: number }>`
  height: 100%;
  flex-shrink: 0;
  position: relative;
  width: ${({ $count }) => 100 / $count}%;
`;

export const BlogDetailCoverImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const BlogDetailCoverNav = styled.button`
  top: 50%;
  z-index: 3;
  width: 44px;
  height: 44px;
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

  &:hover {
    background-color: rgba(15, 23, 42, 0.65);
  }

  &.blog-detail-cover-prev {
    left: 16px;
  }

  &.blog-detail-cover-next {
    right: 16px;
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

export const BlogDetailCoverNavIcon = styled(Image)`
  width: 18px;
  height: 18px;

  @media (max-width: 480px) {
    width: 14px;
    height: 14px;
  }
`;

export const BlogDetailCoverDots = styled.div`
  left: 0;
  right: 0;
  bottom: 16px;
  z-index: 3;
  gap: 6px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

export const BlogDetailCoverDot = styled.span<{ $active?: boolean }>`
  width: ${({ $active }) => ($active ? "22px" : "8px")};
  height: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${({ $active }) =>
    $active ? "#fff" : "rgba(255, 255, 255, 0.55)"};
`;

export const BlogDetailContent = styled.div`
  max-width: 820px;
  margin: 0 auto;
`;

export const BlogDetailParagraph = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 175%;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.swiper_group_text_color};

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 165%;
  }
`;

export const BlogDetailRichContent = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 175%;
  color: ${({ theme }) => theme.colors.swiper_group_text_color};

  p {
    margin-bottom: 24px;
  }

  h1,
  h2,
  h3,
  h4 {
    line-height: 130%;
    margin: 36px 0 16px 0;
    color: ${({ theme }) => theme.colors.directive_title_color};
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 28px;
  }

  h3 {
    font-size: 24px;
  }

  h4 {
    font-size: 20px;
  }

  ul,
  ol {
    margin: 0 0 24px 0;
    padding-inline-start: 24px;
  }

  li {
    margin-bottom: 8px;
    list-style: revert;
  }

  a {
    color: ${({ theme }) => theme.colors.price_link_color};
    text-decoration: underline;
  }

  strong,
  b {
    color: ${({ theme }) => theme.colors.directive_title_color};
  }

  blockquote {
    margin: 0 0 24px 0;
    padding: 16px 24px;
    border-inline-start: 4px solid
      ${({ theme }) => theme.colors.light_green_color};
    background-color: ${({ theme }) => theme.colors.swiper_slide_item_color};
    font-style: italic;
    border-radius: 0 12px 12px 0;
  }

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 16px;
    margin: 24px 0;
  }

  figure {
    max-width: 100%;
    margin: 24px 0;
  }

  figcaption {
    font-size: 14px;
    text-align: center;
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.thin_gray};
  }

  /* CKEditor'ning "Media Embed" (YouTube va h.k.) plagini video uchun
     ".media" klassli figure ichida o'zi position/padding-bottom trick
     bilan nisbatni (aspect-ratio) inline style orqali belgilaydi — bu
     yerda faqat o'sha o'ramning butun ustun kengligini (100%) egallashi
     va iframe hech qachon tashqariga chiqib ketmasligi ta'minlanadi. */
  figure.media {
    width: 100%;
    position: relative;
  }

  figure.media iframe,
  figure.media video {
    max-width: 100%;
  }

  hr {
    margin: 40px 0;
    border: none;
    border-top: 1px solid ${({ theme }) => theme.colors.testimonials_box_content_border_color};
  }

  pre {
    padding: 18px 20px;
    border-radius: 12px;
    overflow-x: auto;
    margin-bottom: 24px;
    background-color: ${({ theme }) => theme.colors.dark_blue};
  }

  code {
    font-family: monospace;
  }

  :not(pre) > code {
    padding: 2px 6px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.swiper_slide_item_color};
  }

  pre code {
    color: ${({ theme }) => theme.colors.light};
  }

  table {
    width: 100%;
    margin-bottom: 24px;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 10px 14px;
    border: 1px solid ${({ theme }) => theme.colors.testimonials_box_content_border_color};
  }

  th {
    background-color: ${({ theme }) => theme.colors.swiper_slide_item_color};
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 165%;

    h1 {
      font-size: 26px;
    }

    h2 {
      font-size: 23px;
    }

    h3 {
      font-size: 20px;
    }
  }
`;

export const BlogDetailCta = styled.div`
  text-align: center;
  border-radius: 24px;
  margin: 60px auto 0 auto;
  padding: 50px 40px;
  max-width: 820px;
  background-color: ${({ theme }) => theme.colors.dark_blue};

  @media (max-width: 768px) {
    padding: 36px 24px;
    margin-top: 40px;
  }
`;

export const BlogDetailCtaTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.light};

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const BlogDetailCtaText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  margin: 0 auto 28px auto;
  max-width: 520px;
  color: ${({ theme }) => theme.colors.hero_activity_color};

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 22px;
  }
`;

export const BlogDetailCtaButton = styled.a`
  font-size: 17px;
  font-weight: 600;
  display: inline-block;
  padding: 16px 40px;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.dark_blue};
  background-color: ${({ theme }) => theme.colors.light};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    padding: 13px 30px;
  }
`;

export const BlogDetailRelated = styled.div`
  max-width: 1100px;
  margin: 90px auto 0 auto;

  @media (max-width: 768px) {
    margin-top: 60px;
  }
`;

export const BlogDetailRelatedTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
  color: ${({ theme }) => theme.colors.directive_title_color};

  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 22px;
  }
`;

export const BlogDetailRelatedGrid = styled.div`
  gap: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;

export const BlogDetailRelatedCard = styled(Link)`
  display: flex;
  overflow: hidden;
  border-radius: 16px;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0 4px 16px ${({ theme }) => theme.colors.swiper_slide_background_color};

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px
      ${({ theme }) => theme.colors.swiper_navigation_container_color};
  }
`;

export const BlogDetailRelatedImageWrapper = styled.div`
  width: 100%;
  height: 170px;
  position: relative;
`;

export const BlogDetailRelatedImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const BlogDetailRelatedContent = styled.div`
  padding: 18px;
`;

export const BlogDetailRelatedCardTitle = styled.h4`
  font-size: 17px;
  font-weight: 600;
  line-height: 135%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: ${({ theme }) => theme.colors.directive_title_color};
`;

export const BlogNotFoundBox = styled.div`
  text-align: center;
  padding: 80px 0;
`;

export const BlogNotFoundTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.dark_blue};

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const BlogNotFoundText = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.swiper_group_text_color};
`;

export const BlogNotFoundLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  padding: 15px 30px;
  border-radius: 50px;
  display: inline-block;
  color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.dark_blue};
  background-color: ${({ theme }) => theme.colors.dark_blue};
  transition: color 150ms linear, background-color 150ms linear;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.dark_blue};
  }
`;
