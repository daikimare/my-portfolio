// module
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Article() {
  return(
    <div>
      <Head>
        <title>記事一覧</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <body>
        <h1>技術記事</h1>
        <table>
          <tbody>
            <th>
              <tr>hgoe</tr>
            </th>
            <th>
              <tr>fuga</tr>
            </th>
            <th>
              <tr>piyo</tr>
            </th>
          </tbody>
        </table>
      </body>
      <footer>
        <h3><Link href="/">Home</Link></h3>
      </footer>
    </div>
  )
}