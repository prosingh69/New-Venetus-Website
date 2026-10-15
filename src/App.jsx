import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Components/Layout/AppLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Portfolio from './Pages/Portfolio'
import Process from './Pages/Process'
import Contact from './Pages/Contact'
import ClientTestimonial from './Pages/ClientTestimonial'
import LocationHome from './Pages/LocationHome'
import Videos from './Pages/Videos'

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
          path:'/about',
          element:<About/>
        },
        {
          path:'/About',
          element:<About/>
        },
        {
          path:'/services',
          element:<Service/>
        },
        {
          path:'/Services',
          element:<Service/>
        },
        {
          path:'/portfolio',
          element:<Portfolio/>
        },
        {
          path:'/Portfolio',
          element:<Portfolio/>
        },
        {
          path:'/videos',
          element:<Videos/>
        },
        {
          path:'/Videos',
          element:<Videos/>
        },
        {
          path:'/video',
          element:<Videos/>
        },
        {
          path:'/Video',
          element:<Videos/>
        },
        {
          path:"/process",
          element:<Process/>
        },
        {
          path:"/Process",
          element:<Process/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/Contact",
          element:<Contact/>
        },
        {
          path:"/testimonial",
          element:<ClientTestimonial/>
        },
        {
          path:"/Testinomial",
          element:<ClientTestimonial/>
        },
        // Location Landing Page Routes (Matches KariGhars architecture)
        {
          path: "/interior-designers-in-sarjapur-road",
          element: <LocationHome />
        },
        {
          path: "/interior-designers-in-dommasandra",
          element: <LocationHome />
        },
        {
          path: "/interior-designers-in-varthur",
          element: <LocationHome />
        },
        {
          path: "/interior-designers-in-sompura",
          element: <LocationHome />
        },
        {
          path: "/interior-designers-in-muthanallur",
          element: <LocationHome />
        },
        {
          path: "/interior-designers-in-indiranagar",
          element: <LocationHome />
        },
        {
          path: "/interior-designers-sarjapura",
          element: <LocationHome />
        },
        {
          path: "/interior-designers-in-sarjapur",
          element: <LocationHome />
        },
        {
          path: "/interior-designers-in-hsr-layout",
          element: <LocationHome />
        },
        {
          path: "/interior-designers-in-koramangala",
          element: <LocationHome />
        },
        {
          path: "/interior-designers-in-whitefield",
          element: <LocationHome />
        },
        {
          path: "/interior-designers-in-electronic-city",
          element: <LocationHome />
        },
        {
          path: "/interior-designers-in-jp-nagar",
          element: <LocationHome />
        },
        {
          path: "/interior-designers-in-bellandur",
          element: <LocationHome />
        },
        {
          path: "/interior-designers-in-yelahanka",
          element: <LocationHome />
        },
        // Dynamic slug fallback for any additional Bangalore locations
        {
          path: "/interior-designers-in-:slug",
          element: <LocationHome />
        },
        {
          path: "/interior-designers-:slug",
          element: <LocationHome />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App