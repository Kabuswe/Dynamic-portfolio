import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import HomeHeader from '../components/home-header'
import HomeMain from '../components/home-main'

export default function Home() {
  const title = "Home"
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar title={title}/>
      <div className="page-content">
        <HomeHeader 
        intro="Graduate Student at Abdelmalek Essaâdi University, Software Quality Assurance Major"
        name="Kabuswe Mulenga"/>
        <HomeMain/>
        <Footer/>
      </div>
     
    </>

  )
}
