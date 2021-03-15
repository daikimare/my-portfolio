// module
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Hanburger from '../components/Hanburger';

export default function Introduction() {
  return(
    <div>

      <Head>
        <title>ittroduction</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
    
      <Hanburger />

      <h1>About maresuke</h1>
      <h2>My status</h2>
      <div className="my-status">
        <p>name:</p><p>maresuke</p>
        <p>age:</p><p>21</p>
        <p>live:</p><p>Ishikawa</p>
      </div>
      <div className="skill-status">
        <div className="web-front">
        <h2>Skill</h2>
          <table><tbody>
            <th>
              <tr>JavaScript</tr>
            </th>
            <th>
              <tr>React</tr>
              <tr>Vue</tr>
              <tr>Next</tr>
            </th>
          </tbody></table>
        </div>
        <div className="native-front">
          <table><tbody>
            <th>
              <tr>Kotlin</tr>
              <tr>Swift</tr>
            </th>
          </tbody></table>
        </div>
      </div>

      <footer>
        <address>Daiki Fukushima</address>
        <h3><Link href="/">Home</Link></h3>
      </footer>

    </div>
  )
}