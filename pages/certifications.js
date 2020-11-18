import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import SectionHeader from '../components/section-header'
import {SectionLeft,SectionRight} from '../components/section-content'
import { format } from 'date-fns'
import { getData } from '../middleware/database'

function Certifications({data}) {
  const title = "Certifications"

  let left = true
  
  const formatDate = (start) =>{
    let startDate = new Date()
    startDate.setFullYear(start.year, start.month)
    startDate = format(startDate,'LLL yyyy')

    left = !left

    return startDate
  }
  
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

            {
              data.certifications.map((value,index) => (
                (left)?
                <SectionLeft 
                key={index}
                heading={value.name}
                subHeading={value.authority} 
                bubbleText={formatDate(value.date.start)}
                lineVisble={((data.certifications.length-1) !== index)}/>
                :
                <SectionRight 
                key={index}
                heading={value.name}
                subHeading={value.authority} 
                bubbleText={formatDate(value.date.start)}
                lineVisble={((data.certifications.length-1) !== index)}/>
              ))
            }

          </div>
        
          </div>
          
        </div>
        
        <Footer/>
      </div>
    </>

  )
}

export async function getStaticProps(){
  const data = await getData('certifications')

  return{
    props:{
      data
    }
  }
}

export default Certifications
