// module
import React from 'react';
import Head from 'next/head';

// component
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div>
    
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <header>
        <Navbar />
      </header>

      <main>

      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  )
}