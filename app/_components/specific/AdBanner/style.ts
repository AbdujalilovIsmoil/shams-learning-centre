"use client";

import styled from "styled-components";

export const AdBannerLink = styled.a`
  display: block;
  width: 100%;
  line-height: 0;
`;

export const AdBannerImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 220px;
  object-fit: cover;
  display: block;

  @media (max-width: 768px) {
    max-height: 140px;
  }
`;
