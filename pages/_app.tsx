import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ProgressBar from '@badrap/bar-of-progress'
import router from 'next/router'

import 'mapbox-gl/dist/mapbox-gl.css';

const progress = new ProgressBar({
  size:4,
  className:'z-50',
  delay:100,
  color:'#FE595E'
})

router.events.on('routeChangeStart',progress.start)
router.events.on('routeChangeComplete',progress.finish)
router.events.on('routeChangeError',progress.finish)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
