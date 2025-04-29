import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div>
      <Navbar />
        <div className="container my-3">
            <Outlet />
        </div>
    </div>
  )
}

export default MainLayout