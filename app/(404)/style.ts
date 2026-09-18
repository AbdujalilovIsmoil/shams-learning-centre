"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export const NotFoundContainer = styled.section`
  padding: 150px 0px 60px 0px;

  @media only screen and (max-width: 768px) {
    padding: 100px 0px 40px 0px;
  }

  @media only screen and (max-width: 576px) {
    padding: 30px 0px;
  }
`;

export const NotFoundContent = styled.div`
  margin: 0 auto;
  max-width: 800px;
  text-align: center;

  @media only screen and (max-width: 992px) {
    max-width: 700px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 500px;
  }

  @media only screen and (max-width: 576px) {
    max-width: none;
    padding: 0 15px;
  }
`;

export const NotFoundImage = styled(Image)`
  width: 100%;
  margin: 0 auto;
  max-width: 700px;
  object-fit: cover;
  margin-bottom: 20px;

  @media only screen and (max-width: 768px) {
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 576px) {
    margin-bottom: 10px;
  }
`;

export const NotFoundTitle = styled.h1`
  font-size: 32px;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: 0%;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.dark_blue};

  @media only screen and (max-width: 576px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const NotFoundBackButton = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0%;
  padding: 15px 30px;
  border-radius: 50px;
  display: inline-block;
  color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.dark_blue};
  background-color: ${({ theme }) => theme.colors.dark_blue};
  transition: color 150ms linear, background-color 150ms linear;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.dark_blue};
  }

  @media only screen and (max-width: 576px) {
    font-size: 14px;
    padding: 10px 24px;
  }
`;
