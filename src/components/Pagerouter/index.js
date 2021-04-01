import React from 'react';
import Link from 'next/link';

export default function Pagerouter() {
  const navbarItem = [
    {
      id: 1,
      route: "/",
      name: "Home"
    },
    {
      id: 2,
      route: "/Introduction",
      name: "Introduction",
      title: "Introduction"
    },
    {
      id: 3,
      route: "/Product",
      name: "Product",
      title: "Product"
    },
    {
      id: 4,
      route: "/TechBlog",
      name: "TechBlog",
      title: "TechBlog"
    },
    {
      id: 5,
      route: "/History",
      name: "History",
      title: "History"
    },
    {
      id:6,
      route: "/Blog",
      name: "Blog",
      title: "Blog"
    },
    {
      id: 7,
      route: "/Contact",
      name: "Contact",
      title: "Contact"
    }
  ]
  return (
    <ul className=" md:flex md:justify-end text-center ">
      {navbarItem.map((val) => {
        return (
          <li key={val.id} className=" border-b md:border-none block px-8 py-2 hover:bg-gray-600 rounded ">
            <Link
              name={val.name}
              value={val.route}
              component={Link}
              href={val.route}
              title={val.title}
              >
              {val.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}