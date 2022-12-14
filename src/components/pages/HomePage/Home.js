import React from 'react'
import HeroSection from '../HeroSection'
import {homeObjOne} from './Data'

const Home = () => {
  return (
      <>
        <HeroSection {...homeObjOne} />
      </>
  )
}

export default Home