import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";
import db from "../db.json";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    display: flex;
    flex-direction: column;
    font-family: 'Nunito', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
    font-size: 16px;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.mainBg}80,
      ${({ theme }) => theme.colors.mainBg}BB
    );
    border-radius: 6px;
  }
`;

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="charSet" content="utf-8" />
        <title>{db.title}</title>
        <meta name="title" content={db.title} />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Matheus Oliveira" />
        <meta name="description" content={db.description} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={db.title} />
        <meta property="og:url" content={"./"} />
        <meta property="og:image" content={db.bg} />
        <meta property="og:description" content={db.description} />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={db.theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
