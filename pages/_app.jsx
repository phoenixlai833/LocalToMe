import '../styles/globals.css'
import Head from 'next/head'
import { FlexBox, Container, Wrapper, Colour } from '../styles/globals.js'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
