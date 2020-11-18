import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import SectionHeader from '../components/section-header'
import {SectionLeft,SectionRight} from '../components/section-content'
import { format } from 'date-fns'
import {getData} from '../middleware/database'

function Experience({data}) {
  const title = "Experience"
    
  let left = true

  const formatDates = (start,end) =>{
    let startDate = new Date()
    startDate.setFullYear(start.year, start.month)
    startDate = format(startDate,'LLL yyyy')

    let endDate = (end !== null)? new Date(): "Current"
    if(typeof endDate === "object"){
      endDate.setFullYear(end.year, end.month)
      endDate = format(endDate,'LLL yyyy')
    }else{
      endDate = "Current"
    } 

    left = !left

    return startDate + " - " + endDate
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
          header="EXPERIENCE"
          subHeader="My Work Experience"/>
          <div className="section-cont">
           {data.position_groups.map((value,index) =>(

             (left)?
             <SectionLeft 
             key={index}
             heading={value.profile_positions[0].company + ", " + value.profile_positions[0].location}
             subHeading={value.profile_positions[0].title}
             bubbleText={formatDates(value.profile_positions[0].date.start,value.profile_positions[0].date.end)}
             description=""
             lineVisble={((data.position_groups.length-1) !== index)}/>
             :
             <SectionRight
             key={index}
             heading={value.profile_positions[0].company + ", " + value.profile_positions[0].location}
             subHeading={value.profile_positions[0].title}
             bubbleText={formatDates(value.profile_positions[0].date.start,value.profile_positions[0].date.end)}
             description=""
             lineVisble={((data.position_groups.length-1) !== index)}/>
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
  const data = await getData('experience')

  return{
    props:{
      data
    }
  }
}

export default Experience
