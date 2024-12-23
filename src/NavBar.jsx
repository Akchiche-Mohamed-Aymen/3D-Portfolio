import React, { useEffect, useState } from 'react'
import logo from './assets/logo.jpg'
export default function NavBar() {
  const[appear , setAppear] = useState(false)
  const[toggle , setToggle] = useState(false)
  
  function handleSize() {
    let width = window.innerWidth
    if(width <= 650)
     setAppear(true)
   else setAppear(false)
  }
  useEffect(()=>{
     handleSize()
    window.onresize = ()=>{
      handleSize()
    }
  },[])
  return (
    <nav className={`flex items-start justify-around py-3 bg-gray-950 ${toggle ? 'h-fit duration-1000': 'h-14'} mb-3`} >
        <div className='flex items-center gap-2'>
            <img src={logo} alt="" className='h-10 w-20 rounded' />
            <h1 className='text-white font-bold text-lg'>AYMEN | FRONTEND WEB DEVELOPER</h1>
        </div>
        <div className = 'flex flex-col md:flex-row gap-3 text-white'>
        {
              appear &&
              <>
              <div className={`bars flex flex-col gap-2 cursor-pointer ${toggle ? 'hidden' : ''}`} onClick={()=>setToggle(true)}>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <div className={`bars1 mb-5 relative flex flex-col gap-2 cursor-pointer ${!toggle ? 'hidden' : ''}`} onClick={()=>setToggle(false)}>
                <p></p>
                <p></p>
            </div>
            </>
            }
            <a href="#" className={appear && !toggle ? 'hidden' : ''}>About</a>
            <a href="#" className={appear && !toggle ? 'hidden' : ''}>Projects</a>
            <a href="#" className={appear && !toggle ? 'hidden' : ''}>Contact</a>

           
        </div>
      
    </nav>
  )
}
