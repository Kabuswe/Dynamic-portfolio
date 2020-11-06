import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import SectionHeader from '../components/section-header'
import {SectionLeft,SectionRight} from '../components/section-content'

export default function Education() {
  const title = "Education"
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
          header="EDUCATION"
          subHeader="My Educational Background"/>
          <div className="section-cont">

            <SectionLeft 
            heading="Université Abdelmalek Essaâdi | Faculté des sciences" 
            subHeading="Master's degree in Computer Software Engineering" 
            bubbleText="2019 - 2021"
            lineVisble={true}/>

            <SectionRight 
            heading="Université Chouaïb Doukkali El Jadida | Faculté des Sciences" 
            subHeading="Bachelor's degree in Data Modeling/Warehousing and Database Administration" 
            bubbleText="2018 - 2019"
            lineVisble={true}/>
            
            <SectionLeft 
            heading="Université Sidi Mohammed Ben Abdellah-Fès | Ecole Supérieure de Technologie" 
            subHeading="University Of Technology Diploma in Computer Engineering Technology/Technician" 
            bubbleText="2016 - 2018"
            lineVisble={true}/>

            <SectionRight 
            heading="Mohammed V University in Rabat | Faculté des sciences de l'éducation" 
            subHeading="French Language Certificate in French Studies" 
            bubbleText="2015 - 2016"
            lineVisble={true}/>

            <SectionLeft 
            heading="Canisius Secondary School" 
            subHeading="High School Diploma" 
            bubbleText="2010 - 2014"
            lineVisble={false}/>

          </div>
        
          </div>
          
        </div>
        
        <Footer/>
      </div>
    </>

  )
}
