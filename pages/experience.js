import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import SectionHeader from '../components/section-header'
import {SectionLeft,SectionRight} from '../components/section-content'

export default function Experience() {
  const title = "Experience"
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar title={title}/>
      <div className="container-fluid container-main">
        <div className="container">
        <SectionHeader/>
        <div className="section-cont">
          <SectionLeft lineVisble={true}/>
          <SectionRight lineVisble={false}/>
        </div>
       
        </div>
        
      </div>
      
      <Footer/>
    </>

  )
}
