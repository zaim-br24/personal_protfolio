import { BrowserRouter } from "react-router-dom"
import React, {useEffect, useState} from "react"
import {
  Navbar,
  About,
  Hero,
  Tech,
  Experiences,
  Works,
  Contact,
  Alert
} from './components'

const App = ()=> {
  const [loading , setLoading] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(true)
    }, 1000)
    }, [])
    const closeAlert = ()=>{
      setLoading(false)
    }

  
  return (
   <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar/>
        <Hero/> 
      </div>
      <About/>
      {loading && <Alert handleClick={closeAlert}/>}

      <Tech/>
      <Works/>
      <Experiences/>

      <div className='relative z-0'>
        <Contact/>
      </div>
    </div>
    
   </BrowserRouter>
  )
}

export default App
