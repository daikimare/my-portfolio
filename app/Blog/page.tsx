import { getBlogs } from 'lib/blog'
import Image from 'next/image'
import Link from 'next/link'
import { FC, use } from 'react'

const getInitBlog = async () => {
  const blog = getBlogs()

  return blog
}

const Blog: FC = () => {
  const blogs = use(getInitBlog())

  return (
    <>
      <h1 className="text-3xl font-bold underline">Blog</h1>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Blog junle</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                className="group"
                href={`/Blog/${blog.slug}`}
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-xl bg-gray-200">
                  <Image
                    alt={''}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    src={blog.coverImage}
                    fill
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{blog.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {blog.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default Blog
