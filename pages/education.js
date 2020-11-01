import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Education() {
  const title = "Education"
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar title={title}/>
      <Footer/>
    </>

  )
}
