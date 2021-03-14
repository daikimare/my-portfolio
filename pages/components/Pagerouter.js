import React from 'react';
import Link from 'next/link';

export default function Pagerouter() {
  const navbarItem = [
    {
      id: 1,
      route: "/",
      name: "HOME"
    },
    {
      id: 2,
      route: "/contents/Introduction",
      name: "Introduction"
    },
    {
      id: 3,
      route: "/contents/Product",
      name: "Product"
    },
    {
      id: 4,
      route: "/contents/Article",
      name: "Article"
    },
    {
      id: 5,
      route: "/contents/History",
      name: "History"
    },
    {
      id: 6,
      route: "/contents/Contact",
      name: "Contact"
    }
  ]
  return (
    <div>
      <ul className=" md:flex md:justify-end text-center ">
        {navbarItem.map((val) => {
          return (
            <li key={val.id} className=" border-b md:border-none block px-8 py-2 hover:bg-gray-600 rounded ">
              <Link
                name={val.name}
                value={val.route}
                component={Link}
                href={val.route}
                >
                {val.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}