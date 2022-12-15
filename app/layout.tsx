import '#/styles/globals.css'
import { FooterMemo } from '../ui/Footer'
import { HeaderMemo } from '../ui/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
        <HeaderMemo />

        <main className="container flex-1 mx-auto my-5">{children}</main>

        <FooterMemo />
      </body>
    </html>
  )
}
