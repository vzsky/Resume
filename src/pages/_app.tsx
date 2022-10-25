import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import { Global, css } from '@emotion/core'
import { CSSReset, ThemeProvider, theme, DefaultTheme } from '@chakra-ui/core'

export default class CustomApp extends App {
  public render() {
    const { Component, pageProps } = this.props
    const customTheme: DefaultTheme = {
      ...theme,
      fonts: {
        ...theme.fonts,
        body:
          "'Helvetica Neue', 'Segoe UI', 'Helvetica', Kanit, system-ui",
        heading:
          "'Helvetica Neue', 'Segoe UI', 'Helvetica', Kanit, system-ui",
      },
    }

    return (
      <ThemeProvider theme={customTheme}>
        <Head>
          <title>Touch Sungkawichai</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, user-scalable=yes"
          />
        </Head>
        <CSSReset />
        <Global
          styles={css`
            html,
            body,
            #__next {
              height: 100%;
              margin: 0;
            }
          `}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
