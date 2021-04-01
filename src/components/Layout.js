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
        <title>{siteTitle} | {props.pageTitle}</title>
        <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/unicorn_1f984.png" />
      </Head>

      {/* header */}
      <Header />  

      {/* main contents */}
      <main className=" z-10 ">
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