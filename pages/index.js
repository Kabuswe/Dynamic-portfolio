import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import HomeHeader from '../components/home-header'
import HomeMain from '../components/home-main'
import React from 'react'

function Home({data}) {
  const title = "Home"

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

export async function getStaticProps(){

  const res = await fetch("http://localhost:3000/api/home")
  const data = await res.json()

  return{
    props:{
      data
    }
  }
}

export default Home
