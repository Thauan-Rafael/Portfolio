import React from 'react'
import SideBar from './components/SideBar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <SideBar/>
      <div id='mainContent'>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <ToastContainer/>
      </div>
    </>
  )
}

export default App;
