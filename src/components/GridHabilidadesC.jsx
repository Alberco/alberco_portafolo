import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function GridHabilidadesC({ data }) {
  return (
    <article className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-20">
        {
            data.map( item => (
            <div key={uuidv4()} className="flex flex-col items-center gap-4 text-center rounded-2xl p-4 hover:shadow-2xl shadow-red hover:bg-[#0f0b22e5] transition-all duration-500">
                { item.icon }
                <span className="text-white text-xl md:text-3xl">{item.name}</span>
            </div>
            ) )
        }
    </article>  
  )
}

export default GridHabilidadesC