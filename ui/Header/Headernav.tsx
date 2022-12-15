'use client'
import Link from 'next/link'
import {
  FC,
  MutableRefObject,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react'
import MobileMenu from './MobileMenu'

export type NavProps = {
  key: number
  name: string
  href: string
}

// const WIDTH_DISABLE_HEADER = 768

const NavItem: FC<{ headerColumns: NavProps[]; className: string }> = ({
  headerColumns,
  className,
}) => {
  return (
    <div className={className}>
      {headerColumns.map((value) => (
        <Link key={value.key} className="h-16" href={value.href}>
          <div className=" flex ml-14 w-36 h-16 text-3xl justify-center items-center font-semibold rounded-xl shadow-light-button hover:bg-sky-100">
            <p className=" align-middle">{value.name}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

const MobileMenuItem: FC<{
  headerColumns: NavProps[]
  className: string
  ref: RefObject<HTMLDivElement>
}> = ({ headerColumns, className, ref }) => {
  return (
    <div
      ref={ref}
      className="absolute top-5 bg-gray-600 right-0 w-72 h-96 md:hidden"
    >
      <div className={className}>
        {headerColumns.map((value) => (
          <Link key={value.key} className="" href={value.href}>
            <div className="">
              <p>{value.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const Nav: FC<{ headerColumns: NavProps[] }> = ({ headerColumns }) => {
  // const [width, setWidth] = useState<number | null>(null)
  // const updateWidth = useCallback(() => {
  //   setWidth(window.innerWidth)
  // }, [setWidth])

  // useEffect(() => {
  //   window.addEventListener(`resize`, updateWidth, {
  //     capture: false,
  //     passive: false,
  //   })

  //   return () => window.removeEventListener(`resize`, updateWidth)
  // }, [])

  const [open, setOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const clickHandlerRef: MutableRefObject<any | null> = useRef(null)

  const openMenu = () => {
    if (open == true) return
    setOpen((prev) => !prev)
    document.addEventListener('click', clickHandlerRef.current)
  }

  const removeClickHandler = () => {
    document.removeEventListener('click', clickHandlerRef.current)
  }

  useEffect(() => {
    clickHandlerRef.current = (e: { target: Node | null }) => {
      if (mobileMenuRef.current?.contains(e.target)) return

      setOpen(false)
      removeClickHandler()
    }
  }, [])

  return (
    <nav>
      <NavItem
        className="hidden md:flex md:mr-16"
        headerColumns={headerColumns}
      />
      <MobileMenu
        className="md:hidden m-2 mr-8"
        // onClick={() => setOpen((prev) => !prev)}
        onClick={openMenu}
      />
      {open && (
        <MobileMenuItem
          ref={mobileMenuRef}
          className="flex flex-col"
          headerColumns={headerColumns}
        />
      )}
    </nav>
  )
}
