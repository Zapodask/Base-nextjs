import { AppProps } from 'next/app'
import GlobalStyle from '@/styles/global'
import { ThemeProvider } from '@/contexts/ThemeContext'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
