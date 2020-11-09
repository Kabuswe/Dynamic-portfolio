import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import SectionHeader from '../components/section-header'
import {useSelector} from 'react-redux'

export default function Skills() {
  const title = "Skills"
  const {data} = useSelector(state => state)
  
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
                {
                  data.skills.map((value) => (
                    <div className="col-sm-3 mb-5 mr-5 skill-box">
                      <span className="skill-box-text">
                        {value}
                      </span>
                    </div>
                  ))
                }
              </div>

            </div>
      
          </div>
          
        </div>
        
        <Footer/>
      </div>
    </>

  )
}
