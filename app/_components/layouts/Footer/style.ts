"use client";

import Image from "next/image";
import styled from "styled-components";
import { Button, Input } from "@/app/_components";
import PhoneInput from "react-phone-number-input/input";
import { FooterBackgroundImage } from "@/public/images/jpg";

export const FooterContainer = styled.footer`
  background-size: cover;
  padding: 95px 0 40px 0;
  background-position: center;
  background-image: linear-gradient(
      ${({ theme }) => theme.colors.footer_container_color},
      ${({ theme }) => theme.colors.footer_container_color}
    ),
    url(${FooterBackgroundImage.src});

  @media (max-width: 1500px) {
    padding: 70px 0 30px 0;
  }

  @media (max-width: 920px) {
    padding: 60px 0 25px 0;
  }

  @media (max-width: 480px) {
    padding: 40px 0 20px 0;
    background-position: top;
  }
`;

export const FooterWrapper = styled.div`
  gap: 40px;
  display: flex;
  margin-bottom: 25px;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1500px) {
    gap: 24px;
  }

  @media (max-width: 920px) {
    text-align: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const FooterBox = styled.div`
  flex: 1;
  width: 100%;
`;

export const FooterContent = styled.div`
  margin-bottom: 100px;

  @media (max-width: 1500px) {
    margin-bottom: 60px;
  }

  @media (max-width: 920px) {
    margin-bottom: 40px;
  }
`;

export const FooterContentTitle = styled.h2`
  font-weight: 700;
  line-height: 96px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.light};

  @media (max-width: 1500px) {
    font-size: 64px;
    line-height: 80px;
  }

  @media (max-width: 920px) {
    font-size: 48px;
    line-height: 60px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const FooterContentSubTitle = styled.h3`
  font-size: 58px;
  font-weight: 500;
  margin-bottom: 36px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.light};

  @media (max-width: 1500px) {
    font-size: 42px;
    margin-bottom: 28px;
  }

  @media (max-width: 920px) {
    font-size: 30px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    margin-bottom: 16px;
  }
`;

export const FooterContentText = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 36px;
  color: ${({ theme }) => theme.colors.footer_content_text_color};

  @media (max-width: 1500px) {
    font-size: 18px;
  }

  @media (max-width: 920px) {
    font-size: 16px;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const FooterAddressList = styled.ul`
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 920px) {
    align-items: center;
  }
`;

export const FooterAddressItem = styled.li``;

export const FooterGoLink = styled.a`
  gap: 12px;
  align-items: center;
  display: inline-flex;

  @media only screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

export const FooterAddressContainer = styled.address``;

export const FooterAddressItemIcon = styled(Image)`
  width: 18px;
  height: 18px;
`;

export const FooterAddressItemTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 145%;
  font-style: normal;
  color: ${({ theme }) => theme.colors.light};
`;

export const FooterMedias = styled.ul`
  gap: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  justify-content: flex-start;

  @media (max-width: 920px) {
    justify-content: center;
  }
`;

export const FooterMedia = styled.li``;

export const FooterMediaLink = styled.a`
  width: 28px;
  height: 28px;
  display: inline-block;
`;

export const FooterMediaIcon = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const FooterResultLink = styled.a`
  font-size: 18px;
  font-weight: 500;
  padding: 10px 50px;
  border-radius: 10px;
  transition: all 150ms linear;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.light_green_color};
  border: 1px solid ${({ theme }) => theme.colors.light_green_color};
  box-shadow: 0px 1px 4px 0px
    ${({ theme }) => theme.colors.footer_result_link_color};

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.light_green_color};
  }

  @media (max-width: 1500px) {
  }

  @media (max-width: 920px) {
    font-size: 16px;
    padding: 8px 36px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px 24px;
  }
`;

export const FooterForm = styled.form`
  gap: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FooterInputBox = styled.div`
  height: 100%;
`;

export const FooterInput = styled(Input)`
  width: 100%;
  padding: 28px;
  font-size: 18px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.footer_input_color};

  &::placeholder {
    color: ${({ theme }) => theme.colors.footer_input_placeholder_color};
  }

  @media (max-width: 920px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    font-size: 13px;
  }
`;

export const FooterPhoneInput = styled(PhoneInput)`
  width: 100%;
  padding: 28px;
  font-size: 18px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.footer_input_color};

  &::placeholder {
    color: ${({ theme }) => theme.colors.footer_input_placeholder_color};
  }

  @media (max-width: 920px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    font-size: 13px;
  }
`;

export const FooterTextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 28px;
  font-size: 18px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.footer_input_color};

  &::placeholder {
    color: ${({ theme }) => theme.colors.footer_input_placeholder_color};
  }

  @media (max-width: 920px) {
    height: 160px;
    padding: 20px;
  }

  @media (max-width: 480px) {
    height: 140px;
    padding: 16px;
    font-size: 13px;
  }
`;

export const FooterSubmit = styled(Button)`
  padding: 15px;
  font-size: 28px;
  font-weight: 500;
  border-radius: 6px;
  transition: all 150ms linear;
  color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.light_green_color};
  background-color: ${({ theme }) => theme.colors.light_green_color};

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.light_green_color};
  }

  @media (max-width: 920px) {
    padding: 12px;
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    padding: 10px;
  }
`;

export const FooterSecurityText = styled.p`
  font-size: 22px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 4%;
  color: ${({ theme }) => theme.colors.footer_security_text_color};

  @media (max-width: 1500px) {
    font-size: 18px;
  }

  @media (max-width: 920px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
