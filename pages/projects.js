import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import SectionHeader from '../components/section-header'
import {SectionLeft,SectionRight} from '../components/section-content'

export default function Projects() {
  const title = "Projects"
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

            <SectionLeft 
            heading="Medical Records App For Storing and Managing Medical Records | Built with ReactNative" 
            bubbleText="MAY 2020 - JUL 2020"
            description="The goal of this project was to learn the ReactNative framework for multiplatform app development through a project oriented approach.
            The project's requirements were laid out in a way that allowed for extensive discovery of the framework. 
            This gave way to several solutions within the app which could be adapted to the creation of other applications."
            lineVisble={true}/>

            <SectionRight 
            heading="Image processing app built with MATLAB App Designer" 
            bubbleText="NOV 2019 - DEC 2019"
            description="The goal of this project was to make use of modern MATLAB tools for building complex applications that reside on optimized and refined algorithms to provide impressive results.
            The app was built on top of the MATLAB Image Processing Toolbox which contains a collection of well optimized algorithms for image processing.
            With the help of these core algorithms, personalized methods were then created to make use of the added benefits of combining these algorithms.
            Once the personalized algorithms were created, they were then integrated with an interactive user interface in order to abstract the underlying complexity."
            lineVisble={true}/>

            <SectionLeft 
            heading="Project Document Management System | Web Application" 
            bubbleText="APR 2019 - JUN 2019"
            description="The goal of this project was to create a web application for the cataloguing and management of students' project reports at the faculty of sciences in El Jadida.
            The web application allowed for access to students and faculty members. Students could, with the help of the web application search for catalogued project documents through the use of keywords. The keywords could be a fully matched project title or partial word matches of the topics in the catalogued project documents.
            On the other hand, faculty members with granted access could add, modify, search and view statistics of the catalogued project documents. An advanced search feature was implemented to allow the admin user (faculty member) to retrieve project documents through a search by mentor name. Furthermore, the admin user could visualize live statistics through the use of interactive graphs as well as apply filters to the graphed statistics."
            lineVisble={true}/>

            <SectionRight 
            heading="Fully Autonomous Cloud Based Web Scraper" 
            bubbleText="FEB 2019 - MAR 2019"
            description="The goal of this project was to create a fully autonomous web scraper and host it on a cloud service platform. 
            Web scraping offers several advantages but with common traditional methods, one would have to manually run a personalised web scraper for data retrieval and wait for results. 
            This is by no means a bad method for static data that doesn't change ever so frequently.
            However, for dynamic data we'd have to run our personalized web scraper several times to get the updated data. 
            This in turn was the primal reason for building this solution. 
            The solution provides a way for you to create a personalized web scraper and add automatic event triggers to run the aforementioned web scraper completely autonomous.
            Click the project link for a full and detailed guide to build your own fully autonomous web scraper."
            lineVisble={false}/>

          </div>
        
          </div>
          
        </div>
        
        <Footer/>
      </div>
    </>

  )
}
