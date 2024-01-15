import React from 'react'
import '../pages/Home.css'
import fitHome from '../assets/fitHome.png'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='image-background'>
       
      </div>

      <div className='home-title'>
        <h1>Welcome to FitFolio</h1>
        <img src= {fitHome}/>
      </div>
    </div>
  )
}

export default Home