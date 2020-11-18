import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import HomeHeader from '../components/home-header'
import HomeMain from '../components/home-main'
import React from 'react'
import { getData } from '../middleware/database'

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
        intro={data.headline}
        name={data.first_name + " " + data.last_name}/>
        <HomeMain
        profileURL={data.profile_picture}
        summary={data.summary}
        email={data.email}
        phone={data.phone}
        github={data.github}
        linkedIn={data.linkedIn}/>
        <Footer/>
      </div>
    </>
  )
}

export async function getStaticProps(){

  const data = await getData('home')

  return{
    props:{
      data
    }
  }
}

export default Home
