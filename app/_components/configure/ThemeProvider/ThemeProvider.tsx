"use client";

import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "@/app/styles";

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}