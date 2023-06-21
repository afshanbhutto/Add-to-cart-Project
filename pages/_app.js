import '@/styles/globals.css'
//using react-query 


import {QueryClient , QueryClientProvider} from 'react-query';


// mandatory to use new keyword
const queryClient = new QueryClient();


export default function App({ Component, pageProps }) {
  
  return (
  <QueryClientProvider client={queryClient}>
  <Component {...pageProps} />
  </QueryClientProvider>)
}
