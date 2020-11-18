import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import SectionHeader from '../components/section-header'
import {SectionLeft,SectionRight} from '../components/section-content'
import { getData } from '../middleware/database'

function Education({data}) {
  const title = "Education"

  let left = true

  const formatDates = (dateObj) =>{
    left = !left
    return dateObj.start.year + " - " + dateObj.end.year
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
          header="EDUCATION"
          subHeader="My Educational Background"/>
          <div className="section-cont">

              { data.education.map((value,index) => (
                (left)?
                <SectionLeft 
                key={index}
                heading={value.school.name}
                subHeading={value.degree_name + " in " + value.field_of_study}
                bubbleText={formatDates(value.date)}
                lineVisble={((data.education.length-1) !== index)}/>
                :
                <SectionRight 
                key={index}
                heading={value.school.name}
                subHeading={value.degree_name + " in " + value.field_of_study}
                bubbleText={formatDates(value.date)}
                lineVisble={((data.education.length-1) !== index)}/>

              ))}
          </div>
        
          </div>
          
        </div>
        
        <Footer/>
      </div>
    </>

  )
}

export async function getStaticProps(){
  const data = await getData('education')

  return{
    props:{
      data
    }
  }
}

export default Education
