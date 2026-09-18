"use client";

import Image from "next/image";
import styled from "styled-components";

export const QuestionsSection = styled.section`
  padding-top: 120px;
  scroll-margin-top: 100px;

  @media (max-width: 1500px) {
    padding-top: 100px;
  }

  @media (max-width: 768px) {
    padding-top: 80px;
    scroll-margin-top: 80px;
  }

  @media (max-width: 480px) {
    padding-top: 60px;
    scroll-margin-top: 60px;
  }
`;

export const QuestionsSectionTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 130%;
  text-align: center;
  margin-bottom: 60px;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.directive_title_color};

  @media (max-width: 1500px) {
    font-size: 42px;
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;

export const QuestionsContainer = styled.div`
  gap: 20px;
  display: flex;

  @media (max-width: 1500px) {
    gap: 16px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 14px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const QuestionsBox = styled.div`
  flex: 1;
`;

export const QuestionsBoxList = styled.ul`
  gap: 12px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const QuestionsBoxItem = styled.li``;

export const QuestionsBoxItemContainer = styled.div`
  display: flex;
  cursor: pointer;
  padding: 16px 24px;
  align-items: center;
  border-radius: 60px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.light_green_color};

  @media (max-width: 1500px) {
    padding: 14px 20px;
  }

  @media (max-width: 768px) {
    padding: 12px 18px;
    border-radius: 50px;
  }

  @media (max-width: 480px) {
    padding: 10px 16px;
    border-radius: 40px;
  }
`;

export const QuestionsBoxItemTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.light};

  @media (max-width: 1500px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const QuestionsBoxItemIcon = styled(Image)`
  width: 40px;
  height: 40px;
  transition: transform 150ms linear;

  @media (max-width: 1500px) {
    width: 36px;
    height: 36px;
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
  }
`;

export const QuestionsBoxItemContent = styled.div`
  height: 0px;
  overflow: hidden;
  padding: 0px 24px;
  transition: height 150ms linear;

  @media (max-width: 1500px) {
    padding: 0px 20px;
  }

  @media (max-width: 768px) {
    padding: 0px 16px;
  }

  @media (max-width: 480px) {
    padding: 0px 12px;
  }
`;

export const QuestionsBoxItemContentText = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.question_box_item_text_color};

  @media (max-width: 1500px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
