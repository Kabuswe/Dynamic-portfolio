import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import {wrapper} from '../middleware/store'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
