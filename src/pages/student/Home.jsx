import React from 'react'
import Hero from '../../components/students/Hero';
import Companies from '../../components/students/Companies';
import CourseSecction from '../../components/students/CourseSecction';
import TestimonialsSection from '../../components/students/TestimonialsSection';
import CollToAction from '../../components/students/CollToAction';
import Footer from '../../components/students/Footer';

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero />
      <Companies/>
      <CourseSecction/>
      <TestimonialsSection/>
      <CollToAction/>
      <Footer/>
    </div>
  )
}

export default Home;