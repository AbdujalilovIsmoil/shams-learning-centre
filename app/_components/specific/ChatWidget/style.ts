"use client";

import styled, { keyframes } from "styled-components";

export const pulseRing = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(73, 187, 189, 0.55);
  }
  70% {
    box-shadow: 0 0 0 16px rgba(73, 187, 189, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(73, 187, 189, 0);
  }
`;

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const dotBounce = keyframes`
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  30% {
    transform: translateY(-4px);
    opacity: 1;
  }
`;

export const ChatFab = styled.button<{ $dir: "ltr" | "rtl" }>`
  position: fixed;
  bottom: 24px;
  ${({ $dir }) => ($dir === "rtl" ? "left: 24px;" : "right: 24px;")}
  width: 62px;
  height: 62px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.light_green_color},
    ${({ theme }) => theme.colors.dark_blue}
  );
  color: #fff;
  animation: ${pulseRing} 2.4s ease-out infinite;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.06);
  }

  svg {
    width: 26px;
    height: 26px;
  }

  @media (max-width: 576px) {
    width: 54px;
    height: 54px;
    bottom: 18px;
    ${({ $dir }) => ($dir === "rtl" ? "left: 18px;" : "right: 18px;")}
  }
`;

export const ChatFabBadge = styled.span`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.testimonials_another_color};
  border: 2px solid ${({ theme }) => theme.colors.light};
`;

export const ChatPanel = styled.div<{ $dir: "ltr" | "rtl" }>`
  position: fixed;
  bottom: 100px;
  ${({ $dir }) => ($dir === "rtl" ? "left: 24px;" : "right: 24px;")}
  width: min(380px, calc(100vw - 48px));
  height: 560px;
  max-height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
  border-radius: 22px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.light};
  box-shadow: 0 20px 60px 0 rgba(14, 25, 45, 0.25);
  z-index: 1002;
  animation: ${fadeUp} 0.22s cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: 768px) {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    max-height: 100%;
    border-radius: 0;
  }
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px 18px;
  background: linear-gradient(
    120deg,
    ${({ theme }) => theme.colors.dark_blue},
    #16233d
  );
  color: #fff;
  flex: none;
`;

export const ChatHeaderAvatar = styled.span`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.light_green_color};

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const ChatHeaderInfo = styled.div`
  flex: 1;
  min-width: 0;

  strong {
    display: block;
    font-size: 15px;
    font-weight: 700;
  }

  span {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const ChatOnlineDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #3fd17e;
  flex: none;
`;

export const ChatCloseButton = styled.button`
  border: none;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex: none;
  transition: background 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.22);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const ChatBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: ${({ theme }) => theme.colors.swiper_slide_item_color};

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d4d7e0;
    border-radius: 10px;
  }
`;

export const ChatBubbleRow = styled.div<{ $isUser: boolean }>`
  display: flex;
  justify-content: ${({ $isUser }) => ($isUser ? "flex-end" : "flex-start")};
`;

export const ChatBubble = styled.div<{ $isUser: boolean }>`
  max-width: 82%;
  padding: 11px 15px;
  font-size: 13.5px;
  line-height: 1.55;
  white-space: pre-wrap;
  word-break: break-word;

  ${({ $isUser, theme }) =>
    $isUser
      ? `
        background: ${theme.colors.dark_blue};
        color: #fff;
        border-radius: 16px 16px 4px 16px;
      `
      : `
        background: ${theme.colors.light};
        color: ${theme.colors.testimonials_box_content_text_color};
        border-radius: 16px 16px 16px 4px;
        box-shadow: 0 2px 10px rgba(16, 24, 40, 0.06);
      `}
`;

export const ChatTypingDots = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px 15px;
  background: ${({ theme }) => theme.colors.light};
  border-radius: 16px 16px 16px 4px;
  box-shadow: 0 2px 10px rgba(16, 24, 40, 0.06);
  width: fit-content;

  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.thin_gray};
    animation: ${dotBounce} 1.2s ease-in-out infinite;
  }

  span:nth-child(2) {
    animation-delay: 0.15s;
  }

  span:nth-child(3) {
    animation-delay: 0.3s;
  }
`;

export const ChatQuickActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 18px 14px;
  background: ${({ theme }) => theme.colors.swiper_slide_item_color};
`;

export const ChatQuickButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.group_course_color};
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.directive_title_color};
  padding: 7px 13px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.light_green_color};
    background: ${({ theme }) => theme.colors.premium_course_section_color};
  }
`;

export const ChatFooter = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  padding: 14px 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.group_course_color};
  background: ${({ theme }) => theme.colors.light};
  flex: none;
`;

export const ChatTextarea = styled.textarea`
  flex: 1;
  resize: none;
  border: 1px solid ${({ theme }) => theme.colors.group_course_color};
  border-radius: 14px;
  padding: 11px 14px;
  font-size: 13.5px;
  font-family: inherit;
  max-height: 100px;
  outline: none;
  transition: border-color 0.15s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.light_green_color};
  }
`;

export const ChatSendButton = styled.button`
  flex: none;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.light_green_color};
  color: #08202a;
  transition: opacity 0.15s ease, transform 0.15s ease;

  &:hover:not(:disabled) {
    transform: scale(1.06);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;
