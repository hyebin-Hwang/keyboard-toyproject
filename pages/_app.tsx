import type { AppProps } from "next/app"
import Head from "next/head"
import { useRef } from "react"
import { Hydrate, QueryClient, QueryClientProvider } from "react-query"
import GlobalStyle from "../src/styles/GlobalStyle"
import { ReactQueryDevtools } from "react-query/devtools"
import { ThemeProvider } from "styled-components"
import theme from "../src/styles/theme"
import Layout from "../components/common/Layout"

function MyApp({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<QueryClient>()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }

  return (
    <>
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <Head>
            <meta charSet="utf-8" />
            <title>ValueBoard</title>
          </Head>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
