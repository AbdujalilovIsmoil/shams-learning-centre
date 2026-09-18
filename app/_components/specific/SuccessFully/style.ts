"use client";

import Image from "next/image";
import styled from "styled-components";

export const SuccessFullySection = styled.section``;

export const SuccessFullyContainer = styled.div`
  gap: 60px;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    gap: 40px;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

export const SuccessFullyBox = styled.div`
  &:last-child {
    max-width: 750px;
  }

  @media (max-width: 1500) {
    &:last-child {
      max-width: 90%;
    }
  }

  @media (max-width: 768px) {
    &:last-child {
      max-width: 100%;
    }
  }
`;

export const SuccessFullyBoxImage = styled(Image)`
  width: 560px;
  height: 670px;
  max-width: 560px;
  border-radius: 30px;

  @media (max-width: 1200px) {
    width: 480px;
    height: 580px;
  }

  @media (max-width: 1500) {
    width: 400px;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const SuccessFullyBoxTitle = styled.h2`
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0%;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.colors.dark_color};

  @media (max-width: 1500px) {
    font-size: 48px;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 23px;
    line-height: 130%;
    margin-bottom: 25px;
  }
`;

export const SuccessFullyBoxSpan = styled.span`
  color: ${({ theme }) => theme.colors.price_link_color};
`;

export const SuccessFullyBoxList = styled.ul`
  gap: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1500) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  @media (max-width: 480px) {
    gap: 25px;
  }
`;

export const SuccessFullyBoxItem = styled.li`
  &:nth-child(1) {
    h2 {
      color: ${({ theme }) => theme.colors.successfully_first_color};
    }
  }
  &:nth-child(2) {
    h2 {
      color: ${({ theme }) => theme.colors.successfully_second_color};
    }
  }
  &:nth-child(3) {
    h2 {
      color: ${({ theme }) => theme.colors.successfully_third_color};
    }
  }
  &:nth-child(4) {
    h2 {
      color: ${({ theme }) => theme.colors.successfully_four_color};
    }
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const SuccessFullyBoxItemTitle = styled.h2`
  font-weight: 700;
  line-height: 130%;
  margin-bottom: 24px;
  letter-spacing: 0px;

  @media (max-width: 1500px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

export const SuccessFullyBoxItemText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 180%;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.dark_color};

  @media (max-width: 1500) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
