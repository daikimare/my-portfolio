import { FC, memo, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Container: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col justify-center m-5 text-center">
        {children}
      </div>
    </>
  )
}
export default memo(Container)
