import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import HomeHeader from '../components/home-header'
import HomeMain from '../components/home-main'
import React from 'react'
import {useSelector} from 'react-redux'
import {wrapper} from '../middleware/store'

function Home() {
  const title = "Home"
  const {data} = useSelector(state => state)
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar title={title}/>
      <div className="page-content">
        <HomeHeader 
        intro="Graduate Student at Abdelmalek Essaâdi University, Software Quality Assurance Major"
        name={data.first_name + " " + data.last_name}/>
        <HomeMain
        profileURL={data.profile_picture}
        summary={data.summary}/>
        <Footer/>
      </div>
    </>
  )
}

export const getStaticProps =  wrapper.getStaticProps(

  async({store, preview}) => {
    const res = await fetch("http://localhost:3000/api/data")
    const json = await res.json()

    store.dispatch({type: 'DATA', payload:json})
  }
  
)

export default Home
