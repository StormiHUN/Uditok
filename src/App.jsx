import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Uditok from './Uditok'
import Nevjegy from './Nevjegy'
import Notfound from "./Notfound"
import Szerkeszt from './Szerkeszt'
import Layout from './Layout'

function App() {

  const router = createBrowserRouter([
    {
      element: <Layout />, children: [
        { path: "/", element: <Uditok /> },
        { path: "/szerkeszt", element: <Szerkeszt /> },
        { path: "/nevjegy", element: <Nevjegy /> },
        { path: "*", element: <Notfound /> }
      ]
    }
  ]);

  return (
    <div className='bg-teal-200 p-4 min-h-screen'>
      <RouterProvider router={router} />
      <Outlet />

    </div>
  )
}

export default App
