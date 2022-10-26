import React from 'react'
import contact from '../assets/fondo2.jpg'
import {RiGithubFill,
        RiGoogleFill,
        RiLinkedinBoxFill} from "react-icons/ri";
function Contacto() {

  const submitForm = (e) => {
    e.prevetDefault()
  }

  return (
    <div className="pt-0 lg:pt-32 ">
        <div className="flex flex-col lg:flex-row justify-center">
          <div>
            <img src={contact} className=" lg:block lg:w-[600px] object-cover lg:h-[720px] rounded-l-2xl px-0"/>
          </div>

            <form className="flex flex-col lg:bg-[#0f0b22]  items-center gap-10 lg:border-r-2 lg:border-t-2 lg:border-b-2 border-gray-800 lg:rounded-r-2xl px-10 lg:px-40 pt-10 pb-32 lg:py-32" onSubmit={submitForm}>
              <h4 className="text-white text-lg md:text-2xl lg:text-4xl">Enviar Mensaje</h4>
              <div className="flex flex-col gap-2 items-center md:w-[540px]">
                <label className="text-white text-xl">Email</label>
                <input type="email" placeholder="Ingresar Email" className="p-3 md:w-full h-full resize-none border-2 border-pink-600 caret-pink-600  appearance-none outline-none rounded-md" />
              </div>
              <div className="flex flex-col gap-2 items-center md:w-[540px]">
                <label className="text-white text-xl">Descripcion</label>
                <textarea placeholder="Ingresar descripcion" className="md:w-full p-2 h-full resize-none border-2 border-pink-600 caret-pink-600  appearance-none outline-none rounded-lg" />
              </div>
              <div className="text-white text-3xl flex items-center  gap-4">
                <span>
                  <a href="#"><RiLinkedinBoxFill className="hover:rotate-90 transition-all duration-200 cursor-pointer" /></a>
                </span>
                <span>
                  <a href="#"><RiGoogleFill className="hover:rotate-90 transition-all duration-200 cursor-pointer" /></a>
                </span>
                <span>
                  <a href="#"><RiGithubFill className="hover:rotate-90 transition-all duration-200 cursor-pointer" /></a>
                </span>
              </div>
              <button className="border-gray-600 text-white text-xl border-2 px-6 py-3 hover:skew-y-6 transition-all duration-500">Enviar</button>
            </form>

        </div>
    </div>
  )
}

export default Contacto