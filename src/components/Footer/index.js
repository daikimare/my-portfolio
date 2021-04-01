import React from 'react';
import Link from 'next/link';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function Footer() {
  return(
    <footer className=" relative ">
      <div className=" flex justify-center py-4 bg-gray-400 text-green-300 ">
        <h4>&copy; 2021 maresuke(Daiki Fukushima)</h4>
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
