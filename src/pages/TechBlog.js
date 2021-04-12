// module
import Link from 'next/link'
import fs from 'fs'

// component
import Layout from '../components/Layout'
import { readContentsFiles } from '../lib/content-loader'

const TechBlog = (props) => {

  const { posts, hasArchive } = props

  return (
    <Layout pageTitle = "TechBlog">
      <h1 className=" pt-16 md:pt-24 text-2xl md:text-4xl pb-3 md:pb-5 font-bold text-center ">TechBlog</h1>
      <div>
        {posts.map((post) => <div
          key= {post.slug}
          className=" "
          >
            <h2><Link href="/article/[id]" as={`/article/${post.slug}`}><a>{post.title}</a></Link></h2>
            <h2><span>{post.published}</span></h2>
        </div>)}
        {hasArchive ? (
          <div>
            <Link href="/archive/[page]" as="/archive/1"><a>archive</a></Link>
          </div>
        ) : ``}
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }){
  const MaxCount = 5
  const posts = await readContentsFiles({ fs })
  const hasArchive = posts.length > MaxCount

  return {
    props: {
      posts: posts.slice(0, MaxCount),
      hasArchive,
    }
  }
}

export default TechBlog