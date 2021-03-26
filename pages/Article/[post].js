// module
import React from 'react'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
// import fs from 'fs'
// import path from 'path'

// component


const BlogPost = ({ frontmatter, markdownBody }) => {
  if (!frontmatter) return <></>

  return (
    <article>
      <h1>{frontmatter.title}</h1>
      <p>By {frontmatter.author}</p>
      <div>
        <ReactMarkdown source={markdownBody} />
      </div>
    </article>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { post } = ctx.params

  const content = await import(`../../posts/${post}.md`)
  const data = matter(content.default)

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {

    const keys = context.keys()
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

      return slug
    })
    return data
  })(require.context('../../posts', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/article/${slug}`)

  return {
    paths,
    fallback: false,
  }
}
export default BlogPost