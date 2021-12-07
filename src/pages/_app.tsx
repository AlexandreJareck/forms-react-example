import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/GlobalStyles'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="appple-touch icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with ts, reactm nextjs and style components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
