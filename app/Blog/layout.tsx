import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const BlogLayout = ({ children }: Props) => {
  return (
    <>
      <aside>
        <nav>...</nav>
      </aside>
      {children}
    </>
  )
}
export default BlogLayout
