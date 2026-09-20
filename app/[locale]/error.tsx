"use client";

import { useEffect } from "react";
import styled from "styled-components";
import { NotFoundTitle, NotFoundContent, NotFoundContainer } from "@/app/(404)/style";

const RetryButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0%;
  padding: 15px 30px;
  border-radius: 50px;
  display: inline-block;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.dark_blue};
  background-color: ${({ theme }) => theme.colors.dark_blue};
  color: ${({ theme }) => theme.colors.light};
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

// Ushbu segmentdagi (barcha [locale] sahifalari — bosh sahifa, blog va h.k.)
// kutilmagan xatolik butun oq "Application error" ekranini ko'rsatish o'rniga
// shu yumshoq xabarni chiqaradi va foydalanuvchiga qayta urinish imkonini beradi.
const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <NotFoundContainer>
      <div className="container">
        <NotFoundContent>
          <NotFoundTitle>Nimadir noto&apos;g&apos;ri ketdi</NotFoundTitle>
          <RetryButton type="button" onClick={() => reset()}>
            Qayta urinish
          </RetryButton>
        </NotFoundContent>
      </div>
    </NotFoundContainer>
  );
};

export default ErrorBoundary;
