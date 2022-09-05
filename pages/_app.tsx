import emotionReset from 'emotion-reset'
import { css, Global } from '@emotion/react'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
        `}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
