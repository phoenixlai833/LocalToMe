import '../styles/globals.css'
import "../node_modules/mapbox-gl/dist/mapbox-gl.css";
import "../node_modules/mapbox-gl-directions/src/mapbox-gl-directions.css"
import Script from 'next/script'



function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
  </>
}

export default MyApp
