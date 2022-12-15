// module
import React, { useState } from 'react'
import Image from 'next/image'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const Backgrond = () => {

  const  [index, setIndex] = useState(0)

  const handleChageIndex = (index) => {
    setIndex(index)
  }

  return (
    <div className=" relative ">
      
      <AutoPlaySwipeableViews
        index={index}
        onChangeIndex={handleChageIndex}
        enableMouseEvent
      >
        <Image
          src="/background/shinjiko.jpg"
          alt="shinjiko"
          layout="responsive"
          width={700}
          height={475}
          className=" opacity-60 fixed overflow-hidden " />
        <Image
          src="/background/kenrokuen.jpg"
          alt="kenrokuen"
          layout="responsive"
          width={700}
          height={475}
          className=" opacity-60 fixed overflow-hidden " />
        <Image
          src="/background/wiban.jpg"
          alt="wiban"
          layout="responsive"
          width={700}
          height={475}
          className=" opacity-60 fixed overflow-hidden " />
      </AutoPlaySwipeableViews>
      <div className=" absolute flex flex-col text-lg font-bold md:text-7xl md:font-semibold text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50 ">
        <p>welcome to</p>
        <p>maresuke's portfolio</p>
      </div>
    </div>
  )
}

export default Backgrond
