// module
import fs from 'fs'
import path from 'path'

// component
import Layout from '../../components/Layout'
import { listContentsFiles, readContentsFile } from '../../lib/content-loader'

const Post = (params) => {
  return (
    <Layout>
      <div className=" md:pt-24 ">
        <div>
          <span>{params.published}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: params.content}} />
      </div>
    </Layout>
  )
}

export async function getStaticProps ({params}) {
  const content = await readContentsFile({ fs, slug: params.slug })

  return {
    props: {
      ...content
    }
  }
}

export async function getStaticPaths () {
  const paths = listContentsFiles({ fs })
    .map((filename) => ({
      params: {
        slug: path.parse(filename).name,
      }
    }))
  
  return {
    paths,
    fallback: false
  }
}

export default Post
