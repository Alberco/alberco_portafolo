import React from 'react'
import { SiDjango, SiFlask, SiExpress, SiFastapi, SiRubyonrails} from "react-icons/si";
import GridHabilidadesC from '../GridHabilidadesC';

function Backend() {

    const data = [
        {name:"Django",icon:<SiDjango className="text-white  text-6xl md:text-8xl" />},
        {name:"Flask",icon:<SiFlask className="text-white  text-6xl md:text-8xl"/>},
        {name:"FastApi",icon:<SiFastapi className="text-white  text-6xl md:text-8xl" />},
        {name:"Express",icon:<SiExpress className="text-white  text-6xl md:text-8xl" />},
        {name:"Ruby on rails",icon:<SiRubyonrails className="text-white  text-6xl md:text-8xl" />},
    ]
    
  return (
    <GridHabilidadesC data={data} />
  )
}

export default Backend