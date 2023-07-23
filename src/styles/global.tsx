"use client";

import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { colors } from "./colors";
import { fontSizes } from "./fontSize";

interface ThemeInterface {
  colors: Record<string, string>;
  fontSizes: Record<string, string>;
}

const theme: ThemeInterface = {
  colors,
  fontSizes,
};

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    height: 100%;
    scroll-behavior: smooth;

    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body{
    background: ${theme.colors.gray900};
    -webkit-font-smoothing: antialiased;
    color: ${theme.colors.gray100};
  }

  body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
`;

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlobalStyle />
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </>
  );
}
