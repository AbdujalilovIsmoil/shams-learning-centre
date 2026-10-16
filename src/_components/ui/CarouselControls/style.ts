import Image from "@/lib/Image";
import styled from "styled-components";
import Button from "../Button";
import NavigationBase from "../NavigationBase";

export const Controls = styled.div<{
  $marginTop: number;
  $hidden?: boolean;
  $large?: boolean;
}>`
  gap: ${({ $large }) => ($large ? "30px" : "20px")};
  direction: ltr;
  align-items: center;
  justify-content: center;
  margin-top: ${({ $marginTop }) => $marginTop}px;
  display: ${({ $hidden }) => ($hidden ? "none" : "flex")};
`;

export const ControlButton = styled(NavigationBase)`
  width: 56px;
  z-index: 20;
  height: 56px;
  display: flex;
  cursor: pointer;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border: 1px solid ${({ theme }) => theme.colors.group_course_color};
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0px 4px 30px 0px
    ${({ theme }) => theme.colors.testimonials_navigation_color};

  &:hover {
    transform: scale(1.06);
    border-color: ${({ theme }) => theme.colors.light_green_color};
    box-shadow: 0px 6px 40px 0px
      ${({ theme }) => theme.colors.testimonials_navigation_hover_color};
  }

  &:first-child {
    transform: rotate(180deg);
  }

  &:first-child:hover {
    transform: rotate(180deg) scale(1.06);
  }

  /* global *:focus qoidasi sichqoncha bosilganda ham qalin ramka chizadi */
  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;

export const ControlIcon = styled(Image)`
  height: 18px;
  width: auto;

  @media (max-width: 768px) {
    height: 15px;
  }
`;

// Katta variant — "Guruhlar uchun tariflar" qismidagi strelkalar bilan bir xil
export const LargeControlContainer = styled.div<{ $disabled?: boolean }>`
  width: 135px;
  height: 135px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0px 10px 48px 0px
    ${({ theme }) => theme.colors.swiper_navigation_container_color};

  opacity: ${({ $disabled }) => ($disabled ? 0.4 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

export const LargeControlButton = styled(Button)`
  width: 100px;
  height: 100px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0px 10px 48px 0px
    ${({ theme }) => theme.colors.swiper_navigation_container_color};

  /* global *:focus qoidasi sichqoncha bosilganda ham qalin ramka chizadi */
  &:focus:not(:focus-visible) {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

export const LargeControlIcon = styled(Image)`
  width: 80px;
  height: 80px;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
  }
`;
