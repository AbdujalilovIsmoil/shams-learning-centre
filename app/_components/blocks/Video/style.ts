"use client";

import styled from "styled-components";

export const VideoSection = styled.section``;

export const VideoSectionFigures = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 6%;
    top: -10%;
    z-index: -2;
    width: 230px;
    height: 230px;
    border-radius: 50%;
    transform: translateY(0);
    background-color: ${({ theme }) => theme.colors.video__element_color};
  }

  &::after {
    right: 6%;
    content: "";
    z-index: -2;
    bottom: -10%;
    width: 230px;
    height: 230px;
    position: absolute;
    border-radius: 50%;
    transform: translateY(0);
    background-color: ${({ theme }) => theme.colors.video__circle_red};
  }

  @media (max-width: 1500px) {
    &::before,
    &::after {
      width: 180px;
      height: 180px;
    }

    &::before {
      left: 4%;
      top: -8%;
    }

    &::after {
      right: 4%;
      bottom: -8%;
    }
  }

  @media (max-width: 768px) {
    &::before,
    &::after {
      width: 130px;
      height: 130px;
    }

    &::before {
      left: 3%;
      top: -6%;
    }

    &::after {
      right: 3%;
      bottom: -6%;
    }
  }

  @media (max-width: 480px) {
    &::before,
    &::after {
      display: none;
    }
  }
`;

export const VideoSectionBlurContainer = styled.div`
  padding: 18px;
  margin: 0 auto;
  max-width: 1145px;
  border-radius: 18px;
  backdrop-filter: blur(17.346031188964844px);
  border: 0.87px solid ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.vide_blur_color};

  @media (max-width: 1500px) {
    padding: 16px;
  }

  @media (max-width: 768px) {
    padding: 14px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const VideoSectionLightContainer = styled.div`
  padding: 10px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.light};

  @media (max-width: 768px) {
    padding: 8px;
    border-radius: 24px;
  }

  @media (max-width: 480px) {
    padding: 6px;
    border-radius: 16px;
  }
`;

export const VideoSectionIframe = styled.iframe`
  width: 100%;
  height: 600px;
  display: block;
  border-radius: 20px;

  @media (max-width: 1500px) {
    height: 480px;
    border-radius: 18px;
  }

  @media (max-width: 768px) {
    height: 360px;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    height: 240px;
    border-radius: 12px;
  }
`;
