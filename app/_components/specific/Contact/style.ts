"use client";

import styled from "styled-components";
import { BannerImage } from "@/public/images/jpg";

export const DirectiveSection = styled.section`
  padding: 85px 0px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: linear-gradient(
      ${({ theme }) => theme.colors.directive_section_color},
      ${({ theme }) => theme.colors.directive_section_color}
    ),
    url(${BannerImage.src});

  @media (max-width: 1500px) {
    padding: 60px 0px 55px 0px;
  }

  @media (max-width: 768px) {
    padding: 60px 0px;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 50px 0px;
  }
`;

export const DirectiveContainer = styled.div`
  gap: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    gap: 30px;
    text-align: center;
    flex-direction: column;
    justify-content: center;
  }
`;

export const DirectiveContent = styled.div`
  max-width: 700px;

  @media (max-width: 1500px) {
    max-width: 600px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const DirectiveContentTitle = styled.h2`
  font-size: 56px;
  font-weight: 600;
  line-height: 130%;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.light};

  @media (max-width: 1500px) {
    font-size: 48px;
  }

  @media (max-width: 900px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const DirectiveContentSubTitle = styled.h3`
  font-size: 32px;
  font-weight: 400;
  line-height: 130%;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.light};

  @media (max-width: 1500px) {
    font-size: 26px;
  }

  @media (max-width: 900px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 24px;
  }
`;

export const DirectiveLink = styled.a`
  font-size: 22px;
  font-weight: 500;
  line-height: 100%;
  padding: 17px 34px;
  border-radius: 80px;
  display: inline-block;
  transition: transform 150ms linear;
  color: ${({ theme }) => theme.colors.light};
  background: linear-gradient(
    96.36deg,
    ${({ theme }) => theme.colors.directive_link_color} -23.65%,
    ${({ theme }) => theme.colors.directive_second_link_color} 111.66%
  );

  &:active {
    transform: scale(0.9);
  }

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 1500px) {
    font-size: 20px;
    padding: 15px 28px;
  }

  @media (max-width: 900px) {
    font-size: 18px;
    padding: 14px 26px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 12px 22px;
  }
`;
