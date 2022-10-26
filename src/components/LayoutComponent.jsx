import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterComponent from './FooterComponent'
import NavbarComponent from './NavbarComponent'

function LayoutComponent() {
  return (
    <div className="min-h-screen bg-[#0f0b22f5]">
        <NavbarComponent />
        <Outlet />
        <FooterComponent />
    </div>
  )
}

export default LayoutComponent