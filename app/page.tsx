import Image from 'next/image'
import { FC, Suspense } from 'react'

import icon from '#/ui/images/png/main_icon.png'

const RootPage: FC = () => {
  return (
    <>
      <Suspense fallback={null}>
        <div className=" flex flex-col justify-center items-center md:items-start my-5 max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="flex flex-col pr-8 mt-3 md:mt-0">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Daiki Fukushima
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Softwear developer form{' '}
                <span className="font-semibold">Japan</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-500">
                Newly graduated run-of-the-mill shit code mass-producer
              </p>
            </div>
            <div className=" flex mx-auto md:mb-0 md:mr-auto">
              <Image
                alt="DaikiFukushima"
                className=" rounded-full filter grayscale"
                height={200}
                src={icon}
                width={200}
                priority
              />
            </div>
          </div>
          <div className="flex flex-col mt-10">
            <h2 className=" font-bold text-2xl text-black dark:text-gray-400">
              recently
            </h2>
            <div>contents</div>
          </div>
          <div>fuga</div>
        </div>
      </Suspense>
    </>
  )
}
export default RootPage
