import { useState } from "react";
import styled from "styled-components";

export function Quad({part,cod}){
    return(
    <Tela>
        {part?<img src={part.img} />:<></>}
        </Tela>
    )
}
const Tela=styled.div`
background:black;
justify-content:center;
align-items:center;

width:${100/8}%;

height:100%;
img{width:100%;}
@media(max-width:650px){
width:${100/4}%;
}
`