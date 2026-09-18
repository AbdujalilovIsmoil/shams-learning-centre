"use client";

import Image from "next/image";
import styled from "styled-components";

export const RoadSection = styled.section`
  padding-top: 120px;

  @media (max-width: 1500px) {
    padding-top: 100px;
  }

  @media (max-width: 768px) {
    padding-top: 80px;
  }

  @media (max-width: 480px) {
    padding-top: 60px;
  }
`;

export const RoadSectionTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 100%;
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
    line-height: 130%;
    margin-bottom: 30px;
  }
`;

export const RoadSectionSpan = styled.span`
  color: ${({ theme }) => theme.colors.directive_span_color};
`;

export const RoadSectionBackground = styled.div`
  padding: 60px;
  border-bottom-right-radius: 77.09px;
  background-color: ${({ theme }) => theme.colors.road_section_color};

  @media (max-width: 1500px) {
    padding: 50px;
    border-bottom-right-radius: 60px;
  }

  @media (max-width: 768px) {
    padding: 40px 30px;
    border-bottom-right-radius: 45px;
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
    border-bottom-right-radius: 30px;
  }
`;

export const RoadSectionList = styled.ul`
  gap: 65px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1200px) {
    gap: 50px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    gap: 40px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    gap: 30px;
    grid-template-columns: 1fr;
  }
`;

export const RoadSectionItem = styled.li`
  text-align: center;
`;

export const RoadSectionItemBoxImageContainer = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px auto;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0px 7.71px 37px 0px
    ${({ theme }) => theme.colors.swiper_navigation_container_color};

  @media (max-width: 1500px) {
    width: 130px;
    height: 130px;
  }

  @media (max-width: 768px) {
    width: 110px;
    height: 110px;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    width: 90px;
    height: 90px;
    margin-bottom: 14px;
  }
`;

export const RoadSectionItemBoxImageSmallContainer = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0px 7.71px 37px 0px
    ${({ theme }) => theme.colors.swiper_navigation_container_color};

  img {
    transform: translate(5%, 0%);
  }

  @media (max-width: 1500px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 768px) {
    width: 85px;
    height: 85px;
  }

  @media (max-width: 480px) {
    width: 70px;
    height: 70px;
  }
`;

export const RoadSectionItemBoxImage = styled(Image)`
  width: 80px;
  height: 80px;

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

export const RoadSectionItemBoxTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  line-height: 180%;
  letter-spacing: 0%;
  color: ${({ theme }) => theme.colors.group_course_swiper_title_color};

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

export const RoadSectionItemBoxText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 2%;
  color: ${({ theme }) => theme.colors.directive_item_text_color};

  @media (max-width: 1500px) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    font-size: 11px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
