import React from 'react'
import { SiNextdotjs ,SiVuedotjs ,SiJavascript,SiReact} from "react-icons/si";
import GridHabilidadesC from '../GridHabilidadesC';
    
function Frontend() {

    const data = [
        {name:"Javascript",icon:<SiJavascript className="text-white  text-6xl md:text-8xl" />},
        {name:"React",icon:<SiReact className="text-white  text-6xl md:text-8xl"  />},
        {name:"Next",icon:<SiNextdotjs className="text-white  text-6xl md:text-8xl"  />},
        {name:"Vue",icon:<SiVuedotjs className="text-white  text-6xl md:text-8xl"  />}
      ]

  return (
    <GridHabilidadesC data={data} />
  )
}

export default Frontend