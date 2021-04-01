// module
import React from 'react'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import * as fs from 'fs'
import path from 'path'


const BlogPost = ({ frontmatter ,markdown }) => {
  return(
    <article>
      <h1>{frontmatter.title}</h1>
      <p>By {frontmatter.author} - {frontmatter.date}</p>
      <div>
        <ReactMarkdown source={markdown} />
      </div>
    </article>
  )
}
export default BlogPost

export const getStaticPaths = async () => {
  const files = fs.readdirSync('src/posts')
  const paths = files.map((fname) => ({
    params: {
      slug: fname.replace('.md','')
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (params) => {
  const slug = params?.slug
  const md = fs.readFileSync(path.join('/posts', `${slug}.md`)).toString()
  const { data, content } = matter(md)

  return {
    props: {
      frontmatter: data.title,
      author: data.author,
      date: data.date,
    },
    content
  }
}

// const BlogPost = ({ frontmatter, markdownBody }) => {
//   if (!frontmatter) return <></>

//   return (
//     <article>
//       <h1>{frontmatter.title}</h1>
//       <p>By {frontmatter.author}</p>
//       <p>{frontmatter.date}</p>
//       <div>
//         <ReactMarkdown source={markdownBody} />
//       </div>
//     </article>
//   )
// }

// export async function getStaticProps({ ...ctx }) {
//   const { post } = ctx.params

//   const content = await import(`../../posts/${post}.md`)
//   const data = matter(content.default)

//   return {
//     props: {
//       frontmatter: data.data,
//       markdownBody: data.content,
//     },
//   }
// }

// export async function getStaticPaths() {
//   const blogSlugs = ((context) => {

//     const keys = context.keys()
//     const data = keys.map((key, index) => {
//       let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

//       return slug
//     })
//     return data
//   })(require.context('../../posts', true, /\.md$/))

//   const paths = blogSlugs.map((slug) => `/article/${slug}`)

//   return {
//     paths,
//     fallback: false,
//   }
// }
// export default BlogPost