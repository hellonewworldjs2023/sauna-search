import React from 'react'
import { Outlet } from 'react-router-dom'

const Saunas = () => {
  return (
    <div className='md:bg-gray-300'>
      <div className='flex flex-row'>
        <img src="../img/article-logo.jpg" alt="orz" width='40' height='40'/>
        <h2 className='text-2xl'>サウナいこうよ</h2>
      </div>
      <Outlet/>
    </div>
  )
}

export default Saunas