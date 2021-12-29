import { ApolloProvider } from '@apollo/client'
import { SessionProvider } from 'next-auth/react'
import NextNprogress from 'nextjs-progressbar'
import { CartProvider } from 'hooks/use-cart'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { useApollo } from 'utils/apollo'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApoloState)
  console.log(pageProps)
  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <Head>
              <title>Won Games</title>
              <link rel="shortcut icon" href="/img/icon-512.png" />
              <link rel="appple-touch icon" href="/img/icon-512.png" />
              <link rel="manifest" href="/manifest.json" />

              <meta
                name="description"
                content="A simple project starter to work with ts, reactm nextjs and style components"
              />
            </Head>

            <GlobalStyles />
            <NextNprogress
              color="#F231A5"
              startPosition={0.3}
              stopDelayMs={200}
              height={5}
            />
            <Component {...pageProps} />
          </CartProvider>
        </ThemeProvider>
      </ApolloProvider>
    </SessionProvider>
  )
}

export default App
