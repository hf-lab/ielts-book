import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
   
    <div className="container">
   
      <Head>
        <title>IELTS Book Repository</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to IELTS Book Repository!" />
       </main>

      <Footer />
    </div>
  )
}
