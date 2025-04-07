import { useState } from "react";
import styled from "styled-components";

export function Quad({part,cod}){
    const [aparecendo,setAparecendo]=useState(false)

    
    return(
    <Tela>
        <img src={part.img} />
        </Tela>
    )
}
const Tela=styled.div`
background:black;
justify-content:center;
align-items:center;

width:${100/10}%;
height:100%;
img{width:100%;}
`