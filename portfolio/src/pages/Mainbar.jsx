import React from 'react'
import Navbar from '../components/User/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Mainbar = () => {
  return (
    <main className='md:w-3/4 h-screen md:max-h-dvh overflow-y-auto pr-2 scrollbar-hide'>
      <section className='m-2 ml-24 border-slate-600 relative bg-customColor border md:w-full flex flex-col transition-opacity ease-in-out delay-150 align-center p-8 box-border rounded-2xl'>
      <Navbar/>
      <Outlet/>
      </section>
    </main>
  )
}

export default Mainbar;
