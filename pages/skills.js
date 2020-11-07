import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import SectionHeader from '../components/section-header'

export default function Skills() {
  const title = "Skills"
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
            header="SKILLS"
            subHeader="My Skills"/>
            <div className="section-cont">

              <div className="row ml-0">
                <div className="col-sm-3 mb-5 mr-5 skill-box">
                  <span className="skill-box-text">
                  Object-Oriented Programming (OOP)
                  </span>
                </div>
                <div className="col-sm-3 mb-5 mr-5 skill-box">
                   <span className="skill-box-text">
                   Object Oriented Design
                   </span>
                </div>
                <div className="col-sm-3 mb-5 mr-5 skill-box">
                    <span className="skill-box-text">
                    SQL
                    </span>
                </div>
                <div className="col-sm-3 mb-5 mr-5 skill-box">
                  <span className="skill-box-text">
                  Java
                  </span>
                </div>
                <div className="col-sm-3 mb-5 mr-5 skill-box">
                   <span className="skill-box-text">
                   React.js
                   </span>
                </div>
                <div className="col-sm-3 mb-5 mr-5 skill-box">
                    <span className="skill-box-text">
                    Python (Programming Language)
                    </span>
                </div>

                

              </div>

            </div>
      
          </div>
          
        </div>
        
        <Footer/>
      </div>
    </>

  )
}
