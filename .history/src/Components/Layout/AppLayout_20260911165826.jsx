import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const AppLayout = () => {
  return (
    <>
    <Navbar/>
    <main className="pt-[100px] md:pt-[120px]">
    <main>
      <Outlet/>
    </main>
    <Footer/>
    <ScrollRestoration/>
    </>

  )
}

export default AppLayout