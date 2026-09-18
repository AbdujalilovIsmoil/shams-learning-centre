"use client";

import Image from "next/image";
import styled from "styled-components";

export const InfosContainer = styled.section`
  padding: 150px 0;

  @media (max-width: 1500px) {
    padding: 100px 0;
  }

  @media (max-width: 768px) {
    padding: 70px 0;
  }

  @media (max-width: 480px) {
    padding: 50px 0;
  }
`;

export const InfosBoxes = styled.div`
  gap: 120px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1500px) {
    gap: 80px;
  }

  @media (max-width: 768px) {
    gap: 60px;
  }

  @media (max-width: 480px) {
    gap: 40px;
  }
`;

export const InfosBox = styled.div`
  gap: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    gap: 80px;
    text-align: center;
    flex-direction: column;

    &:nth-child(2) {
      flex-direction: column-reverse;
    }
    &:nth-child(even) {
      flex-direction: column-reverse;
    }
  }

  @media (max-width: 480px) {
    gap: 32px;
  }
`;

export const InfosBoxImage = styled(Image)<{ width: number; height: number }>`
  object-fit: cover;
  width: ${({ width }) => width - 100}px;
  height: ${({ height }) => height - 100}px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-width: 350px;
  }

  @media (max-width: 480px) {
    max-width: 280px;
  }
`;

export const InfosContent = styled.div`
  max-width: 650px;

  @media (max-width: 1500px) {
    max-width: 550px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const InfosContentTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.directive_title_color};

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 18px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 14px;
  }
`;

export const InfosContentSpan = styled.span`
  color: ${({ theme }) => theme.colors.directive_span_color};
`;

export const InfosContentText = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.directive_title_color};

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
