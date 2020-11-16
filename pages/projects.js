import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import SectionHeader from '../components/section-header'
import {SectionLeft,SectionRight} from '../components/section-content'
import { format } from 'date-fns'

function Projects({data}) {
  const title = "Projects"

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
          header="PROJECTS"
          subHeader="My Projects"/>
          <div className="section-cont">

            {
              data.projects.map((value,index) => (
                (left)?
                <SectionLeft 
                heading={value.title} 
                bubbleText={formatDates(value.date.start,value.date.end)}
                description={value.description}
                lineVisble={((data.projects.length-1)!==index)}/>
                :
                <SectionRight 
                heading={value.title} 
                bubbleText={formatDates(value.date.start,value.date.end)}
                description={value.description}
                lineVisble={((data.projects.length-1)!==index)}/>
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
  const res = await fetch("http://localhost:3000/api/projects")
  const data = await res.json()

  return{
    props:{
      data
    }
  }
}

export default Projects
