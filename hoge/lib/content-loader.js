// module
import path from 'path'

// library
import remark from 'remark'
import html from 'remark-html'
import matter from 'gray-matter'

const DIR = path.join(process.cwd(), "src/content/posts")
const EXTENSION = ".md"

const listContentsFiles = ({ fs }) => {
  const filenames = fs.readdirSync(DIR)
  return filenames
    .filter((filename) => path.parse(filename).ext === EXTENSION)
}

const readContentsFile = async ({ fs, slug, filename }) => {
  if (slug === undefined) {
    slug = path.parse(filename).name
  }
  const raw = fs.readFileSync(path.join(DIR, `${slug}${EXTENSION}`), 'utf-8')
  const matterResult = matter(raw)

  const { title, published } = matterResult.data

  const parsedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const content = parsedContent.toString()

  return {
    title,
    published,
    content,
    slug
  }
}

const readContentsFiles = async ({ fs }) => {
  const promisses = listContentsFiles({ fs })
    .map((filename) => readContentsFile({ fs, filename }))
  const contents = await Promise.all(promisses)

  return contents.sort(sortWithProp('published', true))
}

const sortWithProp = (name, reversed) => (a,b) => {
  if (reversed) {
    return a[name] < b[name] ? 1: -1
  } else {
    return a[name] < b[name] ? -1: 1
  }
}

export { listContentsFiles, readContentsFile, readContentsFiles }