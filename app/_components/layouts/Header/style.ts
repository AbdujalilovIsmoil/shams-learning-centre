"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  top: 0;
  width: 100%;
  z-index: 1000;
  position: fixed;
  padding: 15px 0px;
  backdrop-filter: blur(9.415094375610352px);
  background-color: ${({ theme }) => theme.colors.header_container_color};
  box-shadow: 0 2px 10px
    ${({ theme }) => theme.colors.header_container_box_shadow};

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderSiteLinkLogo = styled(Link)`
  gap: 12px;
  display: flex;
  align-items: center;
`;

export const HeaderSiteLogo = styled(Image)`
  width: 150px;
  height: auto;

  @media (max-width: 1440px) {
    width: 130px;
  }

  @media (max-width: 768px) {
    width: 110px;
  }

  @media (max-width: 480px) {
    width: 90px;
  }
`;

export const HeaderSiteLogoText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.light};

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const HeaderNav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const HeaderList = styled.ul`
  gap: 36px;
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;

  @media (max-width: 1500px) {
    gap: 24px;
  }
`;

export const HeaderItem = styled.li`
  margin: 0;
`;

export const HeaderLink = styled.a<{ $isActive: boolean }>`
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: color 150ms linear;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.light_green_color : theme.colors.light};

  &:hover {
    color: ${({ theme }) => theme.colors.light_green_color};
  }

  @media (max-width: 1500px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Container = styled.div`
  outline: none;
  position: relative;
  display: inline-block;
`;

export const Trigger = styled.div`
  gap: 12px;
  padding: 8px;
  border: none;
  display: flex;
  cursor: pointer;
  align-items: center;
  background: transparent;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    gap: 8px;
    padding: 6px;
  }
`;

export const FlagCircle = styled.div<{ $flagUrl: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: url("${(props) => props.$flagUrl}") center/cover;
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.flag_circle_box_shadow};

  @media (max-width: 1500px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const ChevronIcon = styled.svg`
  width: 24px;
  height: 24px;
  transition: transform 0.2s;
  fill: ${({ theme }) => theme.colors.chevron_icon_color};

  ${Container}:hover & {
    transform: rotate(180deg);
  }

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const Dropdown = styled.div<{ $isOpen: boolean }>`
  left: 0;
  top: 100%;
  z-index: 1000;
  margin-top: 8px;
  min-width: 160px;
  position: absolute;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transform: translateY(${(props) => (props.$isOpen ? 0 : "-10px")});
  background-color: ${({ theme }) => theme.colors.header_drop_down_color};
  box-shadow: 0 10px 25px ${({ theme }) => theme.colors.flag_circle_box_shadow};

  @media (max-width: 768px) {
    min-width: 130px;
  }
`;

export const FlagCircleSmall = styled.div<{ $flagUrl: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: url("${(props) => props.$flagUrl}") center/cover;

  @media (max-width: 1500px) {
    width: 28px;
    height: 28px;
  }
`;

export const LanguageOption = styled.button`
  gap: 12px;
  width: 100%;
  border: none;
  display: flex;
  font-size: 14px;
  cursor: pointer;
  padding: 12px 16px;
  align-items: center;
  background: transparent;
  transition: background 0.2s;
  color: ${({ theme }) => theme.colors.language_option_color};

  &:hover {
    background: ${({ theme }) => theme.colors.language_option_hover_color};
  }

  @media (max-width: 1500px) {
    padding: 10px 12px;
    font-size: 13px;
  }
`;

export const HeaderContact = styled.div`
  gap: 18px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const HeaderContactButton = styled.a`
  font-size: 22px;
  font-weight: 500;
  padding: 16px 32px;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.dark_blue};
  background-color: ${({ theme }) => theme.colors.dark_blue};
  transition: color 150ms linear, background-color 150ms linear;
  box-shadow: 0px 20px 24px 0px
    ${({ theme }) => theme.colors.header_btn_shadow_color};

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.dark_blue};
  }

  @media (max-width: 1500px) {
    font-size: 18px;
    padding: 12px 24px;
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 13px;
    padding: 8px 16px;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

export const HeaderMenuOpenContainer = styled.button`
  width: 46px;
  height: 46px;
  display: none;
  gap: 5px;
  border: none;
  cursor: pointer;
  align-items: center;
  border-radius: 14px;
  flex-direction: column;
  justify-content: center;
  transition: background-color 200ms ease;
  background-color: ${({ theme }) => theme.colors.header_menu_color};

  @media only screen and (max-width: 1200px) {
    display: flex;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.light_green_color};
  }
`;

export const HeaderMenuBar = styled.span<{
  $isOpenMenu: boolean;
  $position: "top" | "middle" | "bottom";
}>`
  width: 22px;
  height: 2px;
  display: block;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.light};
  transition: transform 260ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 180ms ease;

  ${({ $position, $isOpenMenu }) => {
    if (!$isOpenMenu) return "";
    if ($position === "top") return "transform: translateY(7px) rotate(45deg);";
    if ($position === "bottom") return "transform: translateY(-7px) rotate(-45deg);";
    return "opacity: 0; transform: scaleX(0);";
  }}
`;

export const HeaderMenuIcon = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const HeaderMenu = styled.nav<{ $isOpenMenu: boolean }>`
  display: none;

  @media only screen and (max-width: 1200px) {
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    display: flex;
    padding: 100px 32px 56px;
    position: fixed;
    z-index: 99999999;
    overflow-y: auto;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(22px);
    -webkit-backdrop-filter: blur(22px);
    opacity: ${({ $isOpenMenu }) => ($isOpenMenu ? 1 : 0)};
    visibility: ${({ $isOpenMenu }) => ($isOpenMenu ? "visible" : "hidden")};
    transform: scale(${({ $isOpenMenu }) => ($isOpenMenu ? 1 : 0.97)});
    transition: opacity 280ms ease, transform 280ms ease,
      visibility 280ms ease;
    pointer-events: ${({ $isOpenMenu }) => ($isOpenMenu ? "auto" : "none")};
  }
`;

export const HeaderMenuHead = styled.div`
  top: 20px;
  right: 20px;
  position: absolute;

  @media only screen and (max-width: 768px) {
    top: 16px;
    right: 16px;
  }
`;

export const HeaderMenuCloseButton = styled.button`
  width: 46px;
  height: 46px;
  border: none;
  display: flex;
  cursor: pointer;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: rgba(14, 25, 45, 0.06);
  transition: background-color 200ms ease, transform 300ms ease;

  img {
    filter: brightness(0);
  }

  &:hover {
    transform: rotate(90deg);
    background-color: rgba(14, 25, 45, 0.12);
  }

  &:active {
    opacity: 0.8;
  }
`;

export const HeaderMenuList = styled.ul`
  margin: 0;
  gap: 6px;
  padding: 0;
  display: flex;
  width: 100%;
  max-width: 420px;
  list-style: none;
  flex-direction: column;
`;

export const HeaderMenuItem = styled.li<{ $isOpenMenu: boolean; $index: number }>`
  opacity: ${({ $isOpenMenu }) => ($isOpenMenu ? 1 : 0)};
  transform: translateY(${({ $isOpenMenu }) => ($isOpenMenu ? "0" : "16px")});
  transition: opacity 380ms ease, transform 380ms ease;
  transition-delay: ${({ $isOpenMenu, $index }) =>
    $isOpenMenu ? `${100 + $index * 60}ms` : "0ms"};
`;

export const HeaderMenuLink = styled.a<{ $isActive: boolean }>`
  display: block;
  width: 100%;
  padding: 14px 20px;
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.01em;
  transition: color 150ms ease;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.light_green_color : theme.colors.directive_title_color};

  &:hover {
    color: ${({ theme }) => theme.colors.light_green_color};
  }

  @media only screen and (max-width: 480px) {
    font-size: 21px;
    padding: 12px 16px;
  }
`;
