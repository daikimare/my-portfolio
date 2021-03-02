// module
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
// import Image from 'next/image';
// import Router from 'next/router';

// component
import Sns from './components/SNS';

// stylesheet
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HOME/maresuke blog</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <header>
        <nav className=" flex items-center justify-between flex-wrap bg-teal-500 p-6 ">
          <div className=" w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
            <div className=" text-sm lg:flex-grow ">
              <p className=" block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-green-500 mr-4 " ><Link href="/Introduction">Introduction</Link></p>
              <p className=" block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-green-500 mr-4 "><Link href="/Product">Product</Link></p>
              <p className=" block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-green-500 mr-4 "><Link href="/Kiji">Kiji</Link></p>
              <p className=" block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-green-500 mr-4 " ><Link href="#">blog</Link></p>
            </div>
          </div>
        </nav>
      </header>
      <body>
      {/*<nav className=" flex items-center justify-between flex-wrap bg-teal-500 p-6 ">
      <div className=" w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
      <div className=" text-sm lg:flex-grow ">
              <p className=" block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-green-500 mr-4 " ><Link href="/Introduction">Introduction</Link></p>
              <p className=" block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-green-500 mr-4 "><Link href="/Product">Product</Link></p>
              <p className=" block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-green-500 mr-4 "><Link href="/Kiji">Kiji</Link></p>
              <p className=" block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-green-500 mr-4 " ><Link href="#">blog</Link></p>
            </div>
          </div>
        </nav>*/}
        <h1>maresuke</h1>
      </body>
      <footer>
        <Sns />
      </footer>
    </div>
  )
}
