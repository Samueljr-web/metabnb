import React from 'react'
import HeroSection from './sections/heroSection'
import Section1 from './sections/section1'
import Section2 from './sections/section2'
import { Modal } from '../../components'

function home() {
  return (
    <div>
      <Modal />
        <HeroSection />
        <Section1 />
        <Section2 />
    </div>
  )
}

export default home