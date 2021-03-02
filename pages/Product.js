import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
// import Image from 'next/image';

export default function Product() {
  return(
    <div>
      <Head>
        <title>Product</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <body>
        <h1>成果物</h1>
      </body>
      <footer>
        <h3><Link href="/">Home</Link></h3>
      </footer>
    </div>
  )
}