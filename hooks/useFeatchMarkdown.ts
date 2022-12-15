import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { useCallback } from 'react'
import { Blog } from './types/type'

const BLOG_DIR = '/contents/tech'

export const useFeatchMarkdown = (): {
  getBlogFileNames: () => string[]
  getBlogs: () => Blog[]
  getBlogBySlug: (slug: string) => Blog
} => {
  const getDir = (path: string): string => join(process.cwd(), path)
  const blog_dir = getDir(BLOG_DIR)

  const getFileNames = (dir: string): string[] => {
    return fs.readdirSync(dir)
  }

  const getItemInPath = (filePath: string) => {
    const fileContents = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContents)

    return { ...data, content } as Blog
  }

  const getBlog = (name: string) => {
    const blog = getItemInPath(join(blog_dir, name))
    blog.slug = name.replace(/\.md$/, '')

    return blog
  }
  const getBlogFileNames = useCallback(() => {
    return getFileNames(blog_dir)
  }, [getFileNames])

  const getBlogs = useCallback(() => {
    const names = getBlogFileNames()
    const items = names.map(getBlog)

    return items
  }, [getBlogFileNames, getBlog])

  const getBlogBySlug = useCallback(
    (slug: string) => {
      const fileName = slug + '.md'

      return getBlog(fileName)
    },
    [getBlog],
  )

  return {
    getBlogFileNames,
    getBlogs,
    getBlogBySlug,
  }
}
