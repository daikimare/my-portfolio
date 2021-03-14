import React from 'react';
import Link from 'next/link';
import { reveal as Menu } from 'react-burger-menu';

export default function Product() {

  const showSettings = (event) => {
    event.preventDefault();
  }

  const handleOnOpen = () => {
    
  }

  return(
    <div>
      <header>
        <Menu
          pageWrapId={"page-wrap"}
          right 
          width={'20%'}
          isOpen={false}
          onOpen={handleOnOpen}
          >
          <p><Link href="#">hoge</Link></p>
          <p><Link href="#">fuga</Link></p>
          <p><Link href="#">piyo</Link></p>
          <p><Link href="#">poke</Link></p>
          <p><Link href="#">bazu</Link></p>
        </Menu>
      </header>
      <main id="page-wrap">
        <h1>成果物</h1>
        <h3><Link href="/">Home</Link></h3>
      </main>
    </div>
  )
}