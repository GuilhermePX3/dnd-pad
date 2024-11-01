import React, { useState } from "react"
import Mixer from "./pages/mixer"
import { Wraper } from "./pages/mixer/styles"

const sounds = [
{
    name:'Tavern',
    url:"https://www.youtube.com/watch?v=vyg5jJrZ42s"
},{
    name: 'Misterious & Exploration',
    url:"https://www.youtube.com/watch?v=7wBzL62Va1k&t=545s&ab_channel=Bardify"
},{
    name: "Investigation & Misterious",
    url:"https://www.youtube.com/watch?v=CDWtH8eHeEU"
},{
    name:"Misterious 3", 
    url:"https://youtu.be/kgq21eM26nY?t=302"
},{
    name:"Wolf",
    url:"https://www.youtube.com/watch?v=oo2LHEst5EU&ab_channel=SoundEffectKing",
},{
    name:"Rain",
    url: "https://youtu.be/7KWC84ypEXg?si=YPNORSY3acynnTmU"
},{
    name:"Combat 1",
    url: "https://www.youtube.com/watch?v=MvHHAoibX0M"
},{
    name:'Combat 2',
    url:'https://www.youtube.com/watch?v=e8bHwgPqB2A'
},{
    name:'Combat 3',
    url:'https://www.youtube.com/watch?v=A48QqpWKWG8'
}


//
]

function App() {
    return (
        <Wraper className="flex">
            {sounds.map((e, index) => {
                return <Mixer key={index} url={e.url} name={e.name} />
            })}
        </Wraper>
    )
}

export default App
