// module
import React from 'react'
import Link from 'next/link'

const PostList = ({ posts }) => {

  if (posts === 'undefined') return null

  return (
    <div>
      {!posts && <div>No posts...</div>}
      <ul>
        {posts && 
          posts.map((post) => {
            return (
              <div key={post.slug} className=" container mx-auto ">
                <Link href={{pathname: `/article/${post.slug}`}}>
                  <div className=" text-2xl mt-20 hover:underline hover:text-blue-400 ">
                    {post.frontmatter.title}
                  </div>
                </Link>
                <div className=" flex items-center ">
                  {post.frontmatter.author}
                </div>
                <div className=" mt-8 mb-10 text-justify ">
                  {post.frontmatter.excerpt}
                </div>
                <Link href={{pathname: `/article/${post.slug}`}}>
                  <a>続きを読む</a>
                </Link>
              </div>
            )
          })}
      </ul>
    </div>
  )
}
export default PostList