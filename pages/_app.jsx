import '../styles/globals.css'
import Head from 'next/head'
import { FlexBox, Container, Wrapper, Colour } from '../styles/globals.jsx'
import 'react-time-picker/dist/TimePicker.css'
import 'react-clock/dist/Clock.css'


function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>LocalToMe</title>
      <meta name="description" content="LocalToMe is a web app that locates and provides low-income families/individuals with free and accessible food resources near their area within their budgets." />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
