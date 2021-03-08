// module
import React from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/router';

export default function Navbar() {

  const navbarItem = [
    {
      id: 1,
      route: "/",
      name: "HOME"
    },
    {
      id: 2,
      route: "/components/contents/Introduction",
      name: "Introduction"
    },
    {
      id: 3,
      route: "/components/contents/Product",
      name: "Product"
    },
    {
      id: 4,
      route: "/components/contents/Article",
      name: "Article"
    },
    {
      id: 5,
      route: "/components/contents/History",
      name: "History"
    },
    {
      id: 6,
      route: "/components/contents/Contact",
      name: "Contact"
    }
  ]

  // const router = useRouter()

  return(
    <div>
      <h1>maresuke</h1>
      {navbarItem.map((val) => {
        return (
          <Link
            name={val.name}
            value={val.route}
            component={Link}
            key={val.id}
            href={val.route}
            className=" mr-6 float-right " >
            {val.name}
          </Link>
        )
      })}
    </div>

    /*<div>
      <nav className=" flex justify-between ">
        <div>
          <h1 className=" text-6xl text-gray-400"><Link href="/">maresuke</Link></h1>
        </div>
        <div className="">
          <ul className=" flex ">
            <li className=" font-bold px-6 "><Link href="#">About</Link></li>
            <li className=" font-bold px-6 "><Link href="#">Product</Link></li>
            <li className=" font-bold px-6 "><Link href="#">Article</Link></li>
            <li className=" font-bold px-6 "><Link href="#">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </div>*/
  )
}
