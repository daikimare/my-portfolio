import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { Blog } from 'hooks/types/type'

const getDir = (path: string) => join(process.cwd(), path)
const BLOG_DIR = getDir('/contents/tech')

const getBlogFileNames = () => {
  return getFileNames(BLOG_DIR)
}

const getItemInPath = (filePath: string) => {
  const fileContents = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContents)

  return { ...data, content } as Blog
}

const getBlog = (name: string) => {
  const blog = getItemInPath(join(BLOG_DIR, name))
  blog.slug = name.replace(/\.md$/, '')

  return blog
}

const getFileNames = (dir: string): string[] => {
  return fs.readdirSync(dir)
}

const getBlogs = (): Blog[] => {
  const names = getBlogFileNames()
  const items = names.map(getBlog)

  return items
}

const getBlogBySlug = (slug: string) => {
  const fileName = slug + '.md'
  return getBlog(fileName)
}

export { getBlogFileNames, getBlogs, getBlogBySlug }
