// module
import React from 'react';
import "tailwindcss/tailwind.css"
import '../../styles/globals.css'

// component
// import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {

  return(
    <Component {...pageProps} />
  )
}

export default MyApp
