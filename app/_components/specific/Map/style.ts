"use client";

import Image from "next/image";
import styled from "styled-components";

export const MapSection = styled.section`
  padding: 120px 0px;

  @media (max-width: 1500px) {
    padding: 100px 0px;
  }

  @media (max-width: 768px) {
    padding: 80px 0px;
  }

  @media (max-width: 480px) {
    padding: 60px 0px;
  }
`;

export const MapSectionTitle = styled.h2`
  font-size: 60px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.colors.directive_title_color};

  @media (max-width: 1500px) {
    font-size: 48px;
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    font-size: 38px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;

export const MapSectionImage = styled(Image)`
  width: 100%;
  object-fit: cover;

  @media (max-width: 1500px) {
    height: 800px;
  }

  @media (max-width: 768px) {
    height: 600px;
  }

  @media (max-width: 576px) {
    height: 250px;
  }
`;
