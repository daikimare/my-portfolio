import React, { FC, MouseEventHandler } from 'react'

type Props = {
  onClick: MouseEventHandler
  className: string
}

const MobileMenu: FC<Props> = ({ onClick, className }) => {
  return (
    <>
      <button className={className} onClick={onClick} type="button">
        <div className="space-y-2">
          <span className="block w-8 h-0.5 bg-gray-600"></span>
          <span className="block w-8 h-0.5 bg-gray-600"></span>
          <span className="block w-8 h-0.5 bg-gray-600"></span>
        </div>
      </button>
    </>
  )
}

export default MobileMenu
