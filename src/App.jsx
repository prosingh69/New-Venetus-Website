import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Components/Layout/AppLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Portfolio from './Pages/Portfolio'
import Process from './Pages/Process'
import Contact from './Pages/Contact'

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:'/About',
          element:<About/>
        },
        {
          path:'/Services',
          element:<Service/>
        },
        {
          path:'/Portfolio',
          element:<Portfolio/>
        },
        {
          path:"/Process",
          element:<Process/>
        },
        {
          path:"/Contact",
          element:<Contact/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App