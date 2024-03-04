import React from 'react'
import SideBar from './components/SideBar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <SideBar/>
      <div id='mainContent'>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
      </div>
    </>
  )
}

export default App;
