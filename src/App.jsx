import React from 'react'
import SideBar from './components/SideBar'
import Home from './components/Home'
function App() {

  return (
    <>
      <SideBar/>
      <div id='mainContent'>
        <Home/>
      </div>
    </>
  )
}

export default App
