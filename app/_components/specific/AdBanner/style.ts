"use client";

import styled from "styled-components";

export const AdBannerLink = styled.a`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 4 / 1;
  overflow: hidden;
  line-height: 0;

  @media only screen and (min-width: 1024px) {
    aspect-ratio: 6 / 1;
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

export const AdBannerLabel = styled.span`
  position: absolute;
  top: 6px;
  right: 8px;
  z-index: 1;
  padding: 2px 8px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 1.4;
  pointer-events: none;

  @media only screen and (min-width: 1024px) {
    top: 8px;
    right: 12px;
    font-size: 11px;
    padding: 3px 10px;
  }
`;
