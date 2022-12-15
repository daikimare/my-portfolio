import { memo } from 'react'

export const Footer = () => {
  return (
    <footer className=" bg-gray-200 dark:bg-gray-300 mt-8 py-4">
      <div className="max-w-4xl mx-auto h-12 flex items-center justify-center">
        &copy; 2022 maresuke(Daiki Fukushima)
      </div>
    </footer>
  )
}

export const FooterMemo = memo(Footer)
