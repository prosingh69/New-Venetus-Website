import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const AppLayout = () => {
  return (
    <>
    <Navbar/>
    <main className="pt-20 md:pt-24">
    <main className="pt-[100px] md:pt-[120px]">
      <Outlet/>
    </main>
    <Footer/>
    <ScrollRestoration/>
    </>

  )
}

export default AppLayout