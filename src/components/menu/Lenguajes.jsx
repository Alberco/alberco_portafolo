import React from 'react'
import GridHabilidadesC from '../GridHabilidadesC';
import { SiHtml5 ,
         SiCss3,
         SiJavascript,
         SiPython,
         SiRuby} from "react-icons/si";

function Lenguajes() {

    const data = [
        {name:"HTML5",icon:<SiHtml5 className="text-white  text-6xl md:text-8xl" />},
        {name:"CCS3",icon:<SiCss3 className="text-white  text-6xl md:text-8xl"  />},
        {name:"Javascript",icon:<SiJavascript className="text-white  text-6xl md:text-8xl" />},
        {name:"Python",icon:<SiPython className="text-white  text-6xl md:text-8xl"  />},
        {name:"Ruby",icon:<SiRuby className="text-white text-6xl md:text-8xl"/>},
    ]

  return (
    <GridHabilidadesC data={data} />
  )
}

export default Lenguajes