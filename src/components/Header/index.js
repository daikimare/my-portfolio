// module
import React, { useState, useRef, useEffect } from 'react';
import { Sling as Hamburger } from 'hamburger-react'

// component
import Pagerouter from '../Pagerouter';

export default function Navbar() {

  const [isToggle, setToggle] = useState(false);
  const clickEventOpen = () => {
    setToggle(!isToggle)
  }

  const menuRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown",clickEventOut);
    return () => {
      document.removeEventListener("mousedown",clickEventOut);
    }
  },[])

  const clickEventOut = (e) => {
    if(menuRef.current && !menuRef.current.contains(e.target)) {
      setToggle(false);
    }
  }

  return(
    <header className=" fixed z-30 w-full md:flex md:justify-between md:py-4 bg-gray-400 text-green-300 ">
      <div ref={menuRef} className=" flex justify-between items-center px-4 md:flex md:justify-between ">
        <h1 className=" text-4xl font-semibold md:text-3xl ">maresuke</h1>
        <div className=" md:hidden ">
          <button
            onClick={clickEventOpen}
            aria-haspopup="true"
            aria-expanded={isToggle}
          >
            <Hamburger />
          </button>
        </div>
      </div>

      {/* mobile screen */}
      { isToggle && (
        <Pagerouter />
      )}
      {/* PC and tablet screen */}
      <div className=" hidden md:flex ">
        <Pagerouter />
      </div>

    </header>
  )
}
