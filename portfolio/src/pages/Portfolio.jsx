import React from 'react'
import Sidebar from '../components/User/sidebar/Sidebar'
import Mainbar from './Mainbar'

const Portfolio = () => {
  return (
    <div className='md:flex m-auto mt-11  text-white gap-6 justify-center items-stretch main-component md:max-w-screen-xl'>
    <Sidebar/>
    <Mainbar/>
  </div>
  )
}

export default Portfolio
