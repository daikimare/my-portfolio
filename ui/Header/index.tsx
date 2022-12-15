import { memo } from 'react'
import { Nav, NavProps } from './Headernav'

const headerColumns: NavProps[] = [
  {
    key: 0,
    name: 'Home',
    href: '/',
  },
  {
    key: 1,
    name: 'Profile',
    href: '/Profile',
  },
  {
    key: 2,
    name: 'Blog',
    href: '/Blog',
  },
  {
    key: 3,
    name: 'Contact',
    href: '/Contact',
  },
]

const Header = () => {
  return (
    <>
      <header>
        <div className="flex items-center justify-between text-gray-500">
          <h1 className="text-3xl md:text-5xl font-bold ml-12 my-8">
            Maresuke&apos;s Blog
          </h1>
          <Nav headerColumns={headerColumns} />
        </div>
      </header>
    </>
  )
}
export const HeaderMemo = memo(Header)
