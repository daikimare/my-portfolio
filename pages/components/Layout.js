// module
import React from 'react';
import Head from 'next/head';

// component
import Footer from './Footer';
import Hanburger from './Hanburger';

export default function Layout() {
  return (
    <div>
    
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      {/* header */}
      <Hanburger />

      <main className=" container m-auto text-center p4 ">
        {/* MAIN CONTENTS */}
        <div className=" flex flex-wrap ">
          <article className=" w-full lg:w-1/2 ">
            hear is left caram but single screen when mobile screen
          </article>
          <article className=" w-full lg:w-1/2 ">
            hear is right caram but single screen when mobile screen
          </article>
        </div>
      </main>

      {/* footer */}
      <Footer />

    </div>
  )
}