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

export const HeaderMenuOpenContainer = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  display: none;
  cursor: pointer;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  transition: opacity 150ms linear;
  border: 1px solid ${({ theme }) => theme.colors.header_menu_color};
  background-color: ${({ theme }) => theme.colors.header_menu_color};

  @media only screen and (max-width: 1200px) {
    display: flex;
  }

  &:active {
    opacity: 0.8;
  }
`;

export const HeaderMenuIcon = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const HeaderMenuOverlay = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media only screen and (max-width: 1200px) {
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100dvh;
    position: fixed;
    z-index: 99999998;
    background-color: rgba(14, 25, 45, 0.55);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
    transition: opacity 200ms ease, visibility 200ms ease;
  }
`;

export const HeaderMenu = styled.nav<{ $isOpenMenu: boolean }>`
  display: none;

  @media only screen and (max-width: 1200px) {
    top: 0;
    right: 0;
    width: min(320px, 84vw);
    height: 100dvh;
    display: flex;
    padding: 24px 20px;
    position: fixed;
    z-index: 99999999;
    overflow-y: auto;
    flex-direction: column;
    box-shadow: -8px 0 32px rgba(0, 0, 0, 0.25);
    border-left: 1px solid rgba(255, 255, 255, 0.08);
    background-color: rgba(14, 25, 45, 0.6);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    transition: transform 220ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(${({ $isOpenMenu }) => ($isOpenMenu ? "0" : "100%")});
  }
`;

export const HeaderMenuHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 24px;
`;

export const HeaderMenuCloseButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  display: flex;
  cursor: pointer;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  transition: background-color 150ms linear;
  background-color: rgba(255, 255, 255, 0.08);

  &:hover {
    background-color: rgba(255, 255, 255, 0.16);
  }

  &:active {
    opacity: 0.8;
  }
`;

export const HeaderMenuList = styled.ul`
  margin: 0;
  gap: 8px;
  padding: 0;
  display: flex;
  list-style: none;
  width: 100%;
  flex-direction: column;
`;

export const HeaderMenuItem = styled.li``;

export const HeaderMenuLink = styled.a<{ $isActive: boolean }>`
  padding: 14px 16px;
  display: block;
  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  transition: background-color 150ms linear, color 150ms linear;
  background-color: ${({ $isActive }) =>
    $isActive ? "rgba(73, 187, 189, 0.14)" : "transparent"};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.light_green_color : theme.colors.light};

  &:hover {
    background-color: ${({ $isActive }) =>
      $isActive ? "rgba(73, 187, 189, 0.14)" : "rgba(255, 255, 255, 0.08)"};
  }
`;
