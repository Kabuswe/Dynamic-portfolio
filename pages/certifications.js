import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import SectionHeader from '../components/section-header'
import {SectionLeft,SectionRight} from '../components/section-content'

export default function Certifications() {
  const title = "Certifications"
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar title={title}/>
      <div className="page-content">
        <div className="container-fluid container-main">
          <div className="container">
          <SectionHeader
          header="CERTIFICATIONS"
          subHeader="My Certificates"/>
          <div className="section-cont">

            <SectionLeft 
            heading="Front-End Web Development with React" 
            subHeading="Coursera" 
            bubbleText="OCT 2020"
            lineVisble={true}/>

            <SectionRight 
            heading="Server-side Development with NodeJS, Express and MongoDB" 
            subHeading="Coursera" 
            bubbleText="OCT 2020"
            lineVisble={true}/>
            
            <SectionLeft 
            heading="Service-Oriented Architecture" 
            subHeading="Coursera" 
            bubbleText="OCT 2020"
            lineVisble={true}/>

            <SectionRight 
            heading="Design Patterns" 
            subHeading="Coursera" 
            bubbleText="SEP 2020"
            lineVisble={true}/>

            <SectionLeft 
            heading="Software Architecture" 
            subHeading="Coursera" 
            bubbleText="SEP 2020"
            lineVisble={false}/>

          </div>
        
          </div>
          
        </div>
        
        <Footer/>
      </div>
    </>

  )
}
