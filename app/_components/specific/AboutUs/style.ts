"use client";

import Image from "next/image";
import styled from "styled-components";

export const AboutUsSection = styled.section`
  padding: 120px 0px;
  scroll-margin-top: 100px;

  @media (max-width: 1500px) {
    padding: 100px 0px;
  }

  @media (max-width: 768px) {
    padding: 80px 0px;
    scroll-margin-top: 80px;
  }

  @media (max-width: 480px) {
    padding: 60px 0px;
    scroll-margin-top: 60px;
  }
`;

export const AboutUsSectionContainer = styled.div`
  gap: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 60px;
    text-align: center;
  }

  @media (max-width: 768px) {
    gap: 40px;
  }

  @media (max-width: 480px) {
    gap: 30px;
  }
`;

export const AboutUsSectionBox = styled.div``;

export const AboutUsSectionImage = styled(Image)`
  width: 600px;
  height: 520px;
  object-fit: cover;

  @media (max-width: 1200px) {
    width: 500px;
    height: 440px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const AboutUsSectionContent = styled.div`
  max-width: 545px;

  @media (max-width: 1500px) {
    max-width: 700px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const AboutUsSectionContentTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 130%;
  margin-bottom: 36px;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.directive_title_color};

  @media (max-width: 1500px) {
    font-size: 38px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 28px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
    margin-bottom: 20px;
  }
`;

export const AboutUsSectionContentText = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 2%;
  color: ${({ theme }) => theme.colors.directive_item_text_color};

  @media (max-width: 1500px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
