import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const AppLayout = () => {
  return (
    <>
    <Navbar/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
    <ScrollRestoration/>
    </>

  )
}

export default AppLayout