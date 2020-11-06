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
      <div className="page-content">
        <div className="container-fluid container-main">
          <div className="container">
          <SectionHeader
          header="EXPERIENCE"
          subHeader="My Work Experience"/>
          <div className="section-cont">

            <SectionLeft 
            heading="Source d'Art" 
            subHeading="Student Intern" 
            bubbleText="apr 2018 - jun 2018"
            description="Development of a publicity android mobile application.
            Development and maintenance of a quiz platform used at the Radiologie and Medical Imagery Conference.
            Designing E-posters used at the aforementioned conference."
            lineVisble={true}/>

            <SectionRight 
            heading="Academic Administration of Sidi Mohamed Ben Abdellah University" 
            subHeading="Student Intern" 
            bubbleText="jul 2017 - jul 2017"
            description="Software Architecture Analysis of an Academic Certificate Generation platform.
            Evaluation of the aforementioned platform by means of detecting code smells."
            lineVisble={false}/>

          </div>
        
          </div>
          
        </div>
        
        <Footer/>
      </div>
    </>

  )
}
