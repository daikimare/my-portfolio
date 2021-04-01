// module
import React from 'react'
import Link from 'next/link'

// component
import Layout from '../components/Layout'

export default function Introduction() {
  return(
    <Layout pageTitle="about me">
      <h1 className=" text-center text-4xl ">About maresuke</h1>
      <div>
        <h2>My status</h2>
        <div className="my-status">
          <p>name:</p><p>maresuke</p>
          <p>age:</p><p>21</p>
          <p>live:</p><p>Ishikawa</p>
          <p>born:</p><p>Shimane</p>
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
    </Layout>
  )
}
