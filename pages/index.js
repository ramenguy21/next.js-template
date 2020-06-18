import Head from 'next/head'
import Header from '../components/header'
import ProductCard from '../components/product_card'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Teizro</title>
      </Head>
      <Header></Header>
      <ProductCard></ProductCard>
        <style jsx global>{`
        html,
        body {
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
