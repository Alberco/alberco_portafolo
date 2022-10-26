import React from 'react'
import { Link } from 'react-router-dom'
import { RiGithubFill,
         RiGoogleFill,
         RiLinkedinBoxFill} from "react-icons/ri";

function FooterComponent() {
  return (
    <footer className="bg-[#0f0b22] w-full fixed bottom-0 flex justify-center">
        <div>
            <ul className="flex items-center justify-start h-full gap-6 w-full bg-[#0f0b22] py-4">
                    <li className="items-center gap-2 hidden lg:flex">
                        <p className="text-white tracking-wides text-lg">@Copyright Desarrollado por Guillermo ALberco 2022</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <Link to="/" className="text-white font-extrabold py-2" >
                            <RiLinkedinBoxFill className="text-white text-xl md:text-2xl" />
                        </Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <Link to="/habilidades" className="text-white font-extrabold py-2 ">
                            <RiGoogleFill className="text-white text-xl md:text-2xl" />
                        </Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <Link to="/proyectos" className="text-white font-extrabold py-2 ">
                            <RiGithubFill className="text-white text-xl md:text-2xl" />
                        </Link>
                    </li>
                </ul>
        </div>
    </footer>
  )
}

export default FooterComponent