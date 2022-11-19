// module
import fs from "fs"
import Link from "next/link"

// component
import Pager from "../../components/Pager"
import { listContentsFiles, readContentsFiles } from "../../lib/content-loader"

const COUNT_PER_PAGE = 10

export default function Archive(props) {
  const { posts, page, total, perPage } = props
  return (
    <div title="アーカイブ">
      {posts.map((post) => <div
        key={post.slug}
        className="post-teaser"
      >
        <h2><Link href="/article/[id]" as={`/article/${post.slug}`}><a>{post.title}</a></Link></h2>
        <div><span>{post.published}</span></div>
      </div>)}

      <Pager
        page={page} total={total} perPage={perPage}
        href="/archive/[page]"
        asCallback={(page) => `/archive/${page}`}
      />
    </div>
  )
}

/**
 * ページコンポーネントで使用する値を用意する
 */
export async function getStaticProps({ params }) {
  const page = parseInt(params.page, 10)
  const end = COUNT_PER_PAGE * page
  const start = end - COUNT_PER_PAGE
  const posts = await readContentsFiles({ fs })

  return {
    props: {
      posts: posts.slice(start, end),
      page,
      total: posts.length,
      perPage: COUNT_PER_PAGE,
    }
  }
}

/**
 * 有効な URL パラメータを全件返す
 */
export async function getStaticPaths() {
  const posts = await listContentsFiles({ fs })
  const pages = range(Math.ceil(posts.length / COUNT_PER_PAGE))
  const paths = pages.map((page) => ({
    params: { page: `${page}` }
  }))

  return { paths: paths, fallback: false }
}

/**
 * ユーティリティ: 1 から指定された整数までを格納した Array を返す
 */
function range(stop) {
  return Array.from({ length: stop }, (_, i) => i + 1)
}