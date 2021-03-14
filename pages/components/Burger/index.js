// module
import React,{ useState } from 'react';

import Nav from '../Nav';

export default function Burger() {

  const [open, setOpen] = useState(false)

  return(
    <>
      <div>
        <button
          type="button"
          className="button hamburger"
          aria-controls="global-nav"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="hamburgerLine">
            <span className="visuallyHidden">
              メニューを開閉する
            </span>
          </span>
        </button>
      </div>
      {open && (
        <Nav />
      )}
    </>
  )
}