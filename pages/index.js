// module
import React from 'react'
import Image from 'next/image'

// component
import Layout from '../components/Layout'

export default function Home(articles) {
  return (
    <Layout pageTitle="Home">
      <div className=" relative ">
        <div className=" absolute flex flex-col text-lg font-bold md:text-7xl md:font-semibold text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <p className="">welcome to</p>
          <p className="">maresuke's portfolio</p>
        </div>
        <Image
            src="/background/shinjiko.jpg"
            alt="shinjiko"
            layout="responsive"
            width={1920}
            height={1200}
            quality={100}
            className=" opacity-60 fixed overflow-hidden " />

        <div className=" md:hidden ">
          {/* スマートフォン画面の場合ちょっとした自己紹介を表示 */}
          <h1>hoge</h1>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {

  const res = await fetch (`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return{
    props: {
      articles,
    }
  }
}