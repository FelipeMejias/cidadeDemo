import styled from "styled-components"

export default function Barrinha({chance}){
    return(
        <Bar >
            {chance>0?<Verde width={chance} />:<></>}
        </Bar>
    )
}
const Bar=styled.div`
border-radius:7.5px;
height:15px;
width:90%;position:absolute;bottom:7px;
background-color:transparent;
`
const Verde=styled.div`
border-radius:7.5px;
border-right:1px solid #969696;
top:0;
left:-0.5px;
box-sizing:border-box;
background-color:#4CD85E;
height:100%;
width:${props=>props.width}%
`