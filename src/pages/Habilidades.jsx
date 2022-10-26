import React from 'react'

import { Link, Outlet } from 'react-router-dom';

function Habilidades() {
  return (
    <section className="pt-10 lg:pt-60 md:pt-20 px-10 lg:px-80 flex flex-col lg:flex-row items-center justify-around gap-6 md:gap-20 ">
      <nav>
        <ul className="flex flex-row lg:flex-col items-center gap-4 md:gap-20">
          <li className="group">
            <Link to="" className="border-b-2 border-transparent group-hover:border-b-2 group-hover:border-white py-4">
              <span className="text-white text-md md:text-4xl">Lenguajes</span>
            </Link>
          </li>
          <li className="group">
            <Link to="frontend" className="border-b-2 border-transparent group-hover:border-b-2 group-hover:border-white py-4">
              <span className="text-white text-md md:text-4xl">Frontend</span>
            </Link>
          </li>
          <li className="group">
            <Link to="backend" className="border-b-2 border-transparent group-hover:border-b-2 group-hover:border-white py-4">
              <span className="text-white text-md md:text-4xl">Backend</span>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </section>
  )
}

export default Habilidades