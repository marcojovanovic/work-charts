import React from 'react'
import MainBody from './components/MainBody'
import Navbar from './components/Navbar'
import Search from './components/Search'

import './main.css'


function GitHubApp() {
  return (
    <>
      <Navbar />
    <div className='container'>
    
      <Search />
      <MainBody />
    </div>
    </>
  )
}

export default GitHubApp
