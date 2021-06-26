import 'css/global.css'
import { AppProps } from 'next/app'
import ShopifyContextProvider from 'context/shopify'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ShopifyContextProvider>
        <Component {...pageProps} />
      </ShopifyContextProvider>
    </QueryClientProvider>
  )
}

export default App
