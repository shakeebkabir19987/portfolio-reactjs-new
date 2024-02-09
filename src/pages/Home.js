import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg from '../components/Heroimg'
import About from '../components/About'
import Skill from '../components/Skill'
import Contact from '../components/Contact'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimg/>
      <About/>
      <Skill/>
      <Contact/>
    </div>
  )
}

export default Home
