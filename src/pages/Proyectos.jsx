import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import back from '../assets/back.png'
import Proyecto1 from '../assets/proyecto1.png'
import Proyecto2 from '../assets/proyecto2.png'
function Proyectos() {

  const [repos,setRepos] = useState([])

  const apiGitHub = async () => {
    const resquest = await fetch("https://api.github.com/users/Alberco/repos")
    const data = await resquest.json()  
    return setRepos(data)
  }

  useEffect(()=> {
    apiGitHub()
  })

  return (
    <section className="pb-20 lg:py-20 ">
      <div className="relative py-8">
        <h2 className="text-white inset-0 top-20 text-2xl lg:text-5xl tracking-widest p-8 text-center absolute">Proyectos</h2>
        <img src={back} alt="" className="object-cover w-full h-[220px] lg:h-[220px]" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-5 px-4 md:px-10 lg:px-28 gap-3">
        <h3 className="text-white text-xl  col-span-1 lg:col-span-2 flex items-center gap-1">
          - Favoritos
        </h3>
        <div className="p-8 bg-[#0f0b22] w-full rounded-xl flex flex-col lg:flex-row justify-between items-center gap-1">
          <img src={Proyecto1} className="object-cover w-full h-[220px]"/>
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm  md:text-xl text-white text-center">Walorant Web Api</p>
              <p className="text-white text-sm">Es una pagina para obtener informacion de agentes,armas,skins y muchas cosas mas sobre el juego Valaront</p>
              <button className="border-2 text-white p-3 rounded-lg">
                <a href="https://dashing-sorbet-06036a.netlify.app/agents" target="_blank">Ver Pagina</a>
              </button>
            </div>
        </div>
        <div className="p-8 bg-[#0f0b22] w-full rounded-xl flex flex-col lg:flex-row justify-between items-center gap-2">
          <img src={Proyecto2} className="object-cover w-full h-[220px]"/>
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm  md:text-xl text-white text-center">Jardineria Web</p>
              <p className="text-white text-sm">Pagina oficial de una jardineria donde encontraras sus servicios y productos de jardineria</p>
              <button className="border-2 text-white p-3 rounded-lg">
                <a href="https://dashing-sorbet-06036a.netlify.app/agents" target="_blank">Ver Pagina</a>
              </button>
            </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full gap-4 pb-10 px-4 md:px-20 lg:px-28">
        <h3 className="cols-span-1 md:col-span-3 lg:col-span-4 text-white text-xl">- Repositorios</h3>
        {
          repos.map(item => (
              <div key={uuidv4()} className="border-2 border-gray-800 p-6 lg:w-96 lg:p-4 shadow-2xl text-center">
                  <p className="text-white  text-sm lg:text-xl">{item.name}</p>
                  <p className="text-gray-700  text-sm lg:text-xl">{item.language}</p>
                  <p className="text-white  text-sm lg:text-xl">{item.created_at.split("",10)}</p>
                  <p className="flex items-center justify-center p-3">
                    <button className="border-2 p-2">
                      <a className="text-white" href={item.html_url} target="_blank">Repositorio</a>
                    </button>
                  </p>
              </div>
          ))
        }
      </div>
    </section>
  )
}

export default Proyectos