import React from 'react';
import Link from 'next/link';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function Footer() {
  return(
    <footer>
      <div className=" flex justify-center ">
        <h4 className="">&copy;maresuke</h4>
        <ul className=" flex ">
          <li className="border-b md:border-none mx-2"><Link href="https://github.com/daikimare" className=" block px-8 py-2 my-4 ">
            <GitHubIcon />
          </Link></li>
          <li className="border-b md:border-none mx-2"><Link href = "https://twitter.com/fukutaso46" className=" block px-8 py-2 my-4 ">
            <TwitterIcon />
          </Link></li>
        </ul>
      </div>
    </footer>
  )
}
