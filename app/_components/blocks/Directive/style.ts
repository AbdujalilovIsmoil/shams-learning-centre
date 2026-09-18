"use client";

import Image from "next/image";
import styled from "styled-components";

export const DirectiveSection = styled.section`
  padding: 100px 0px;
  scroll-margin-top: 100px;

  @media (max-width: 1500px) {
    padding: 80px 0px;
    scroll-margin-top: 80px;
  }

  @media (max-width: 768px) {
    padding: 60px 0px;
    scroll-margin-top: 60px;
  }

  @media (max-width: 480px) {
    padding: 40px 0px;
    scroll-margin-top: 40px;
  }
`;

export const DirectiveTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 130%;
  text-align: center;
  letter-spacing: 0px;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.colors.directive_title_color};

  @media (max-width: 1500px) {
    font-size: 40px;
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
    margin-bottom: 30px;
  }
`;

export const DirectiveSpan = styled.span`
  color: ${({ theme }) => theme.colors.directive_span_color};
`;

export const DirectiveContainer = styled.div`
  gap: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1500px) {
    gap: 60px;
  }

  @media (max-width: 768px) {
    gap: 40px;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    gap: 30px;
  }
`;

export const DirectiveBox = styled.div``;

export const DirectiveBoxImage = styled(Image)`
  width: 750px;
  height: 740px;
  object-fit: cover;

  @media (max-width: 1440px) {
    width: 600px;
    height: 580px;
  }

  @media (max-width: 1500px) {
    width: 500px;
    height: 480px;
  }

  @media (max-width: 768px) {
    width: 400px;
    height: 380px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

export const DirectiveList = styled.ul`
  gap: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

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

export const DirectiveItem = styled.li`
  max-width: 375px;
  text-align: center;

  &:nth-child(2) {
    margin-inline-start: 200px;

    @media (max-width: 1440px) {
      margin-inline-start: 150px;
    }

    @media (max-width: 1500px) {
      margin-inline-start: 80px;
    }

    @media (max-width: 768px) {
      margin-inline-start: 0;
    }
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const DirectiveItemImage = styled(Image)`
  width: 80px;
  height: 80px;
  margin: 0 auto 16px auto;

  @media (max-width: 1500px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

export const DirectiveItemTitle = styled.h3`
  font-size: 40px;
  font-weight: 700;
  line-height: 160%;
  letter-spacing: 0%;
  color: ${({ theme }) => theme.colors.directive_title_color};

  @media (max-width: 1500px) {
    font-size: 32px;
  }

  @media (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const DirectiveItemText = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 2%;
  color: ${({ theme }) => theme.colors.directive_item_text_color};

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
