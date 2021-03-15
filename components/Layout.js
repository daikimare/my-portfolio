// module
import React from 'react';
import Head from 'next/head';

// components
import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {

  const {title, children} = props
  const siteTitle = "maresuke"

  return(
    <div className="page">
      {/* head */}
      <Head>
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />


      {/* main contents */}
      <main>
        {title ? <h1 className="page-title">{title}</h1>:``}
        <div className="page-main">
          {children}
        </div>
      </main>

      {/* footer */}
      <Footer />

    </div>
  )
}