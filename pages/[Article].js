// module
import React from 'react';

export default function Article() {
  return(
    <div>
      <h1>技術記事</h1>
      <div className=" container m-auto text-center p4 ">
        <div className=" flex flex-wrap ">
          <div className=" w-fulll lg:w-1/3 ">
            <h1>hogeの記事</h1>
          this area left but top when if screen size is mobile
          </div>
          <div className=" w-fulll lg:w-1/3 ">
            <h1>fugaの記事</h1>
            this area center but middle when if screen size is mobile
          </div>
          <div className=" w-fulll lg:w-1/3 ">
            <h1>piyoの記事</h1>
            this area right but bottom when if screen size is mobile
          </div>
        </div>
      </div>
    </div>
  )
}