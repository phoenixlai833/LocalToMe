import "../styles/globals.css";
import Head from "next/head";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>LocalToMe</title>
        <meta
          name="description"
          content="LocalToMe is a web app that locates and provides low-income families/individuals with free and accessible food resources near their area within their budgets."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
