import { Provider } from 'react-redux'; // Import the Provider component

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import store from '@/store/store';
import Layout from '@/components/layouts/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
   
 <Provider store={store}>
  <Layout>
    <Component {...pageProps} />
  </Layout>
      
    </Provider>

  )
}
