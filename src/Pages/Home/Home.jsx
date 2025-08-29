import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Browse from '../../Components/Browse/Browse'
import AboutUs from '../../Components/AboutUs/AboutUs'
import Services from '../../Components/Services/Services'
import Footer from '../../Components/Footer/Footer'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = () => {
  return (
    <div>
      <Header/>
      <Browse/>
      <AboutUs/>
      <Services/>
      <AppDownload/>
    </div>
  )
}

export default Home
