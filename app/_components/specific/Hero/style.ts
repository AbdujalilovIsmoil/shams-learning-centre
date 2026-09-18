"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { HeroBackgroundImage as HeroImage } from "@/public/images/jpg";
import { Button } from "../../ui";

export const HeroBackgroundImage = styled.div`
  min-height: 500px;
  position: relative;
  padding-top: 150px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right center;
  background-image: url(${HeroImage.src});
`;

export const HeroBackground = styled.section``;

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeroBox = styled.div`
  &:first-child {
    margin-bottom: 100px;
  }

  &:last-child {
    position: relative;

    @media only screen and (max-width: 1000px) {
      display: none;
    }
  }
`;

export const HeroContent = styled.div``;

export const HeroContentTitle = styled.h2`
  font-size: 48px;
  font-weight: 800;
  line-height: 120%;
  letter-spacing: 0%;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.light};

  @media only screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media only screen and (max-width: 576px) {
    font-size: 30px;
  }
`;

export const HeroContentSpan = styled.span`
  font-weight: 700;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-image: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.hero_content_span_first_color} 0%,
    ${({ theme }) => theme.colors.hero_content_span_second_color} 32.69%,
    ${({ theme }) => theme.colors.hero_content_span_first_color} 60.58%,
    ${({ theme }) => theme.colors.hero_content_span_second_color} 86.54%
  );
`;

export const HeroContentText = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 180%;
  letter-spacing: 0%;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.light};

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 576px) {
    font-size: 14px;
  }
`;

export const HeroContentLink = styled.a`
  gap: 15px;
  font-size: 18px;
  font-weight: 600;
  line-height: 100%;
  padding: 22px 28px;
  letter-spacing: 0%;
  border-radius: 80px;
  align-items: center;
  display: inline-flex;
  color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.gray};
  transition: color 150ms linear, background-color 150ms linear;

  &:hover {
    background-color: transparent;
  }

  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 576px) {
    font-size: 14px;
  }
`;

export const HeroContentLinkIcon = styled(Image)`
  width: 20px;
  height: 20px;

  @media only screen and (max-width: 576px) {
    width: 15px;
    height: 15px;
  }
`;

export const HeroTeacherImages = styled(Image)`
  width: 1750px;
  height: 900px;
  object-fit: cover;

  @media only screen and (max-width: 1000px) {
    height: 700px;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 450px;
  }
`;

export const HeroFlexCaseBox = styled(Link)`
  gap: 16px;
  z-index: 1;
  padding: 20px;
  position: absolute;
  align-items: center;
  border-radius: 20px;
  display: inline-flex;
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.light};
  background: ${({ theme }) => theme.colors.vide_blur_color};

  &:nth-child(1) {
    left: 10%;
    bottom: 50%;

    @media only screen and (max-width: 1000px) {
      left: 15%;
    }
  }

  &:nth-child(2) {
    bottom: 55%;
    right: 7.5%;

    @media only screen and (max-width: 1000px) {
      right: 15%;
      bottom: 50%;
    }
  }

  &:nth-child(3) {
    right: 38%;
    bottom: 38%;

    @media only screen and (max-width: 1000px) {
      bottom: 20%;
    }
  }
`;

export const HeroFlexCaseBoxContainer = styled.div``;

export const HeroCaseBox = styled(Link)`
  gap: 16px;
  z-index: 1;
  padding: 20px;
  position: absolute;
  align-items: center;
  border-radius: 20px;
  display: inline-flex;
  flex-direction: column;
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.light};
  background: ${({ theme }) => theme.colors.vide_blur_color};

  &:nth-child(1) {
    left: 10%;
    bottom: 50%;

    @media only screen and (max-width: 1000px) {
      left: 15%;
    }
  }

  &:nth-child(2) {
    bottom: 55%;
    right: 7.5%;

    @media only screen and (max-width: 1000px) {
      right: 15%;
      bottom: 50%;
    }
  }

  &:nth-child(3) {
    right: 38%;
    bottom: 38%;

    @media only screen and (max-width: 1000px) {
      bottom: 20%;
    }
  }
`;

export const HeroCaseBoxTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 2%;
  color: ${({ theme }) => theme.colors.light};
`;

export const HeroCaseBoxLink = styled(Button)`
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  padding: 12px 20px;
  letter-spacing: 0%;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.light};
  transition: color 150ms linear, background-color 150ms linear;
  border: 1px solid ${({ theme }) => theme.colors.hero_pink_color};
  background-color: ${({ theme }) => theme.colors.hero_pink_color};

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.hero_pink_color};
  }
`;

export const HeroFlexCaseBoxImageContainer = styled.div<{ $color: string }>`
  width: 50px;
  height: 50px;
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ $color }) => $color};
`;

export const HeroFlexCaseBoxImage = styled(Image)`
  width: 28px;
  height: 28px;
`;

export const HeroCaseBoxChartContainer = styled(Link)`
  top: 25%;
  right: 7.5%;
  width: 60px;
  height: 60px;
  display: flex;
  position: absolute;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.hero_chart_pink_color};
  box-shadow: 0px 8px 40px 0px
    ${({ theme }) => theme.colors.hero_chart_shadow_color};
`;

export const HeroCaseBoxChartLightContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const HeroCaseBoxChartIcon = styled(Image)`
  width: 18px;
  height: 24px;
`;

export const HeroFlexCaseBoxContent = styled.div``;

export const HeroFlexCaseBoxContentTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 2%;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.light};
`;

export const HeroFlexCaseBoxContentText = styled.h3`
  font-size: 14px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 2%;
  color: ${({ theme }) => theme.colors.light};
`;

export const HeroActivityBackground = styled.div`
  bottom: 0;
  width: 100%;
  position: absolute;
  backdrop-filter: blur(20px);
  background: ${({ theme }) => theme.colors.vide_blur_color};

  @media only screen and (max-width: 1000px) {
    position: relative;
  }
`;

export const HeroActivities = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: space-between;

  @media only screen and (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const HeroActivity = styled.li`
  max-width: 265px;
  padding: 32px 0px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    padding: 25px 0px;
  }

  @media only screen and (max-width: 576px) {
    padding: 18px 0px;
  }
`;

export const HeroActivityTitle = styled.h2`
  font-size: 48px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.light};

  @media only screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media only screen and (max-width: 576px) {
    font-size: 30px;
  }
`;

export const HeroActivityText = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.hero_activity_color};

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const HeroBottomWrapper = styled.div`
  position: relative;
`;

export const HeroBottomContainer = styled.div`
  width: 100%;
  display: flex;
  direction: ltr;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeroBottomBox = styled.div`
  padding: 40px 0px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px 0px;
  }

  &:first-child {
    flex: 1;
    color: white;
    display: flex;
    padding: 40px 0px;
    align-items: center;
    justify-content: center;
    clip-path: polygon(0 0, calc(100% - 40px) 0, 100% 100%, 0 100%);
    background-color: ${({ theme }) => theme.colors.hero_bottom_box_color};

    z-index: 2;

    @media (max-width: 768px) {
      padding: 20px 0px;
      clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), 0 100%);
    }
  }

  &:last-child {
    flex: 1;
    z-index: 1;
    color: white;
    display: flex;
    padding: 40px 0px;
    position: relative;
    margin-left: -40px;
    padding-left: 60px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.light_green_color};

    @media (max-width: 768px) {
      margin-left: 0;
      padding: 20px 0px;
      padding-top: 40px;
      margin-top: -20px;
      padding-left: 1.5rem;
    }
  }
`;

export const HeroBottomBoxTitle = styled.h2`
  font-size: 36px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0%;
  color: ${({ theme }) => theme.colors.light};

  @media only screen and (max-width: 768px) {
    font-size: 28px;
  }

  @media only screen and (max-width: 576px) {
    font-size: 22px;
  }
`;

export const HeroStarIcon = styled(Image)`
  top: 20%;
  left: 50%;
  z-index: 10;
  width: 70px;
  height: 70px;
  object-fit: cover;
  position: absolute;
  pointer-events: none;
  transform: translate(-100%, 0);

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media only screen and (max-width: 576px) {
    top: 30%;
    width: 40px;
    height: 40px;
  }
`;
