import React from 'react'
import { HeroTitle} from './_components/heroTitle'
import { AboutUs } from './_components/aurora';
import Footer from './_components/footer';
import About from './_components/about';
import Testimonials from './_components/testimonials';
export default function page() {
  return (
    <div className=''>
      <HeroTitle />
      <AboutUs />
      <div id='about'>
      <About />
      </div>
      <div id='testimonials'>
      <Testimonials/>
      </div>
      <div id='contact'>
      <Footer />
      </div>
    </div>
  )
}
