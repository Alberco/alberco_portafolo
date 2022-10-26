import { useState }from 'react'
import { Link } from "react-router-dom"
import { RiHome3Line,
    RiDashboardLine,
    RiShieldUserLine,
    RiMessage2Line,
    RiMenuFill,
    RiCloseLine,
    RiGithubFill,
    RiGoogleFill,
    RiLinkedinBoxFill} from "react-icons/ri";

function NavbarComponent() {

    const [showMenu,setShowMenu] = useState(false)
    const toogleMenu = () => {
        setShowMenu(!showMenu)
    }

  return (
    <header>
        <nav className="bg-[#0f0b22] w-full fixed top-0 hidden lg:flex z-50">
                <ul className="flex items-center justify-start h-24 gap-6 w-full pl-60 bg-[#0f0b22]">
                    <li className="flex items-center gap-2 group ">
                        <RiHome3Line className="text-white text-2xl" />
                        <Link to="/" className="text-white text-md transition-all font-extrabold tracking-wider border-transparent border-2 group-hover:border-b-2 group-hover:border-b-white" >Inicio</Link>
                    </li>
                    <li className="flex items-center gap-2 group">
                        <RiShieldUserLine className="text-white text-2xl" />
                        <Link to="/habilidades" className="text-white text-md font-extrabold tracking-wider border-transparent border-2 group-hover:border-b-2 group-hover:border-b-white">Habilidades</Link>
                    </li>
                    <li className="flex items-center gap-2 group">
                        <RiDashboardLine className="text-white text-2xl" />
                        <Link to="/proyectos" className="text-white text-md font-extrabold tracking-wider border-transparent border-2 group-hover:border-b-2 group-hover:border-b-white">Proyectos</Link>
                    </li>
                    <li className="flex items-center gap-2 group">
                        <RiMessage2Line className="text-white text-2xl" /> 
                        <Link to="/contacto" className="text-white text-md font-extrabold tracking-wider border-transparent border-2 group-hover:border-b-2 group-hover:border-b-white">Contacto</Link>
                    </li>
                </ul>
                <ul className="flex items-center justify-end gap-4 w-full h-24 pr-60 bg-[#0f0b22]">
                    <li>
                        <span>
                            <a href="#">
                                <RiLinkedinBoxFill className="hover:rotate-90 transition-all duration-200 cursor-pointer text-white text-3xl" />
                            </a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a href="#">
                                <RiGithubFill className="hover:rotate-90 transition-all duration-200 cursor-pointer text-white text-3xl" />      
                            </a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a href="#">
                                <RiGoogleFill className="hover:rotate-90 transition-all duration-200 cursor-pointer text-white text-3xl" />
                            </a>
                        </span>
                    </li>
                </ul>
        </nav>

        {/* mobil navbar */}
        <nav className={`fixed lg:hidden left-0 ${showMenu ? "left-0": "-left-full" } transition-all duration-300 w-60 h-full flex flex-col z-50 bg-[#0f0b22] justify-between md:justify-around p-10`}>
            <div>
                <ul className="flex items-center flex-col h-full bg-[#0f0b22] gap-10">
                    <li className="flex items-center gap-2 group ">
                        <RiHome3Line className="text-white text-2xl" />
                        <Link to="/" className="text-white text-md transition-all font-extrabold tracking-wider border-transparent border-2 group-hover:border-b-2 group-hover:border-b-white" >Inicio</Link>
                    </li>
                    <li className="flex items-center gap-2 group">
                        <RiShieldUserLine className="text-white text-2xl" />
                        <Link to="/habilidades" className="text-white text-md font-extrabold tracking-wider border-transparent border-2 group-hover:border-b-2 group-hover:border-b-white">Habilidades</Link>
                    </li>
                    <li className="flex items-center gap-2 group">
                        <RiDashboardLine className="text-white text-2xl" />
                        <Link to="/proyectos" className="text-white text-md font-extrabold tracking-wider border-transparent border-2 group-hover:border-b-2 group-hover:border-b-white">Proyectos</Link>
                    </li>
                    <li className="flex items-center gap-2 group">
                        <RiMessage2Line className="text-white text-2xl" /> 
                        <Link to="/contacto" className="text-white text-md font-extrabold tracking-wider border-transparent border-2 group-hover:border-b-2 group-hover:border-b-white">Contacto</Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="flex items-center flex-col bg-[#0f0b22] gap-6">
                    <li>
                        <RiLinkedinBoxFill className="text-white text-2xl" />
                    </li>
                    <li>
                        <RiGithubFill className="text-white text-2xl" />
                    </li>
                    <li>
                        <RiGoogleFill className="text-white text-2xl" />
                    </li>
                </ul>
            </div>
            <button onClick={toogleMenu} className="lg:hidden z-50 bg-[#0f0b22] border-2 text-white fixed bottom-8 right-6 p-4 text-xl rounded-full">
          {
            showMenu ? 
            <RiCloseLine /> : 
            <RiMenuFill/> 
          }
        </button>
        </nav>
    
    </header>
  )
}

export default NavbarComponent