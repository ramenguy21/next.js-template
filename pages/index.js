import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../components/sidebar'

export default function Home() {
  return (
    <div className="container">
    <Head>
      <title>Teizro</title>
    </Head>

    <main>
      <div className="header bg-blue-500">
        <h1>Teizro Web</h1>
        <p>Hi, Welcome to Teizro</p>
        <Link href="/store">
          <a>Start Shopping !</a>
        </Link>
        <Sidebar></Sidebar>
      </div>
      
    </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>

    </div>
  )
}
