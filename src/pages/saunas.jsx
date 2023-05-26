import React from 'react'
import { Outlet } from 'react-router-dom'

const Saunas = () => {
  return (
    <div className='bg-gray-300'>
        <h2>Saunas</h2>
        <Outlet/>
    </div>
  )
}

export default Saunas