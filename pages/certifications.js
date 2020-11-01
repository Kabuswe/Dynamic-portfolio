import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Certifications() {
  const title = "Certifications"
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
