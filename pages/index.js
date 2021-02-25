// module
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
// import Router from 'next/router';

// stylesheet
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HOME/maresuke blog</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <body>
        <h1>maresuke</h1>
      </body>
      <footer>
        <div className="github">
          <Link href="https://github.com/daikimare">GitHub</Link>
          {/*<Image src="vercel.svg" />*/}
        </div>
        <div className="twitter">
          <Link href = "https://twitter.com/fukutaso46" title = "twitter">Twitter</Link>
          {/* */} 
        </div>
        <div className="qiita">
          <Link href="https://qiita.com/daikimare">Qiita</Link>
          {/* */}
        </div>
        <div className="hanteb">
          <Link href="https://marehiro.hateblo.jp/">HatenaBlog</Link>
          {/* */}
        </div>
        <div className="note">
          <Link href="https://note.com/daikimare">note</Link>
          {/* */}
        </div>
      </footer>
    </div>
  )
}
