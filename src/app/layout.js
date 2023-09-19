import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arpit',
  openGraph: {
    title: 'Arpit portfolio',
    description: 'Portfolio created by using nextjs',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <div>
        <Head>
          <title>
            its a portfolio for Arpit Pathak.
          </title>
            <meta
              name = " description"
              content = " check this out its a newly built arpit pathak site"
              key = "desc"
            />
        </Head>  
      </div>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
