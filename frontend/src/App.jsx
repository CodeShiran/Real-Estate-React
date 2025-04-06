import React from 'react'
import Header from './components/header'
import About from './components/about'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header />
      <About />
      <Projects />
      <Testimonials />
    </div>
  )
}

export default App