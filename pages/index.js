import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <meta name="google-site-verification" content="L5K6NDSMzB1v62M0P08YRXM9cABEWitIgbvgSMLsq-g" />
    <div className="container">
   
      <Head>
        <title>IELTS Book Repository</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to IELTS Book Repository!" />
        <p className="description">
        </p>
      </main>

      <Footer />
    </div>
  )
}
