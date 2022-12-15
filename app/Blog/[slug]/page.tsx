import { getBlogBySlug, getBlogs } from 'lib/blog'
import { ParsedUrlQuery } from 'querystring'
import { use } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

type Params = ParsedUrlQuery & {
  slug: string
}

type Props = {
  params: Params
}

export const generateStaticParams = () => {
  const blogs = getBlogs()

  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

const getInitBlog = async (slug: string) => {
  const blog = getBlogBySlug(slug)

  return blog
}

const BlogDetail = ({ params }: Props) => {
  const slug = params.slug
  const data = use(getInitBlog(slug && params.slug))

  return (
    <>
      <article className="prose lg:prose-xl">
        <div>Generic Page! - {params.slug}</div>
        <ReactMarkdown>{data.content}</ReactMarkdown>
      </article>
    </>
  )
}
export default BlogDetail
