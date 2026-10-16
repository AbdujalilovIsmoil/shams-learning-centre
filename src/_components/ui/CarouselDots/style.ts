import styled from "styled-components";

export const DOT_SLOT = 20;
export const DOT_VISIBLE = 5;

export const Viewport = styled.div`
  direction: ltr;
  overflow: hidden;
  flex-shrink: 0;
  height: 20px;
  width: ${DOT_SLOT * DOT_VISIBLE}px;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    #000 22%,
    #000 78%,
    transparent
  );
  mask-image: linear-gradient(
    to right,
    transparent,
    #000 22%,
    #000 78%,
    transparent
  );
`;

export const Track = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  transition: transform 0.35s ease;
`;

const dotSize = (distance: number) => {
  if (distance === 0) return { size: 10, opacity: 1 };
  if (distance === 1) return { size: 7, opacity: 0.55 };
  if (distance === 2) return { size: 5, opacity: 0.35 };
  return { size: 0, opacity: 0 };
};

export const Dot = styled.button<{ $distance: number }>`
  padding: 0;
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  flex-shrink: 0;
  background: none;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: ${DOT_SLOT}px;

  &::after {
    content: "";
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.light_green_color};
    width: ${({ $distance }) => dotSize($distance).size}px;
    height: ${({ $distance }) => dotSize($distance).size}px;
    opacity: ${({ $distance }) => dotSize($distance).opacity};
    transition: width 0.3s ease, height 0.3s ease, opacity 0.3s ease;
  }

  /* global *:focus qoidasi sichqoncha bosilganda ham qalin ramka chizadi;
     bu yerda faqat klaviatura bilan fokus qilinganda yengil halqa ko'rsatiladi */
  &:focus {
    outline: none;
  }

  &:focus-visible::after {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.light_green_color}55;
  }
`;
