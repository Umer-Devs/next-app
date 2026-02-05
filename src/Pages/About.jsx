import React from 'react'
import { AboutHero, Accounts, Footer, Header, OurApproach, WhyChooseUsOne } from '../Componenets'

const About = () => {
  return (
    <>
      <Header />
      <AboutHero />
      <OurApproach />
      <WhyChooseUsOne/>
      <Accounts/>
      <Footer/>
    </>
  )
}

export default About