import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'; 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  ); 
}
