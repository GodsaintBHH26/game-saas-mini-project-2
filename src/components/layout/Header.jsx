import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function HeaderSection() {
  const location=useLocation()
  return (
    <>
    <div className='h-16 w-full bg-[rgb(0,255,143,0.4)] shadow-sm text-blue-500 p-3 flex justify-between' >
      <div className='flex gap-3 w-1/2 items-center'> 
      <Link to='/'><img src="/img/Site-logo-galoga.png" alt="" className='w-12' /></Link>
      <h1 className='text-2xl font-bold'>GaloGa</h1>
      </div>
      <div className='text-black'>
        <Link to='/about' >About</Link>
        <Link to='/login' state={{background: location }}>Login</Link>
      </div>
    </div>
    </>
  )
}

export default HeaderSection