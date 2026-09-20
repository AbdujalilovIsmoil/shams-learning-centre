"use client";

import styled from "styled-components";

export const AdBannerLink = styled.a`
  position: relative;
  display: block;
  width: 100%;
  height: 220px;
  overflow: hidden;
  line-height: 0;

  @media (max-width: 768px) {
    height: 140px;
  }
`;

export const AdBannerImage = styled.img<{ $active: boolean }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.7s ease;
`;
