import styled from "styled-components";
import { useEffect, useState } from "react";
import Canva from "./Canva";
import { Quad } from "./Quad";
import Barrinha from "./Barrinha";
import { criarAsync } from "./criacaoAsync";
import { Rings, ThreeDots, Oval } from "react-loader-spinner";
export function Cidade(){
    const [listaDeListas,setListaDeListas]=useState([])
    const [loading,setLoading]=useState(false)
 

    function executar(){
        setLoading(true)
        async function iniciar() {
            const resultado = await criarAsync();
            setListaDeListas(resultado);
            setLoading(false)
          }
        iniciar();
    }
    useEffect(executar, []);
    return(
        loading?<Tela>
            <ThreeDots
            height="150"
            width="150"
            color="#4fa94d"
            visible={true}
            />
        </Tela>:
        <Tela>
            <Holder>
                {listaDeListas.map((linha,x)=>
                <HolderLinha>
                    {linha.map((part,y)=>{
                        // console.log(part)
                        return(
                        <Quad part={part} cod={`q${x}${y}`} />)})}
                </HolderLinha>
                )}
            </Holder>
            <Button onClick={()=>{
                executar()
             
            }}>
                Gerar Novamente
            </Button>
        </Tela>
    )
}
const Button=styled.div`cursor:pointer;
height:50px;width:160px;background:green;
border-radius:50px;color:white;
justify-content:center;
align-items:center;
`
const Tela=styled.div`
justify-content:space-evenly;
align-items:center;
background:#e5c6a5;
width:100vw;height:100dvh;
`
const Holder=styled.div`
flex-direction:column;
justify-content:center;
align-items:center;
background:red;
width:1000px;
height:80vh;
`

const HolderLinha=styled.div`
justify-content:center;
align-items:center;
width:100%;
height:${100/6}%;
`
/*
   setTimeout(() => {setLoading(20)}, 1*50);
                setTimeout(() => {setLoading(30)}, 2*50);
                setTimeout(() => {setLoading(40)}, 3*50);
                setTimeout(() => {setLoading(50)}, 4*50);
                setTimeout(() => {setLoading(60)}, 5*50);
                setTimeout(() => {setLoading(70)}, 6*50);
                setTimeout(() => {setLoading(80)}, 7*50);
                setTimeout(() => {setLoading(90)}, 8*50);
                setTimeout(() => {setLoading(100)}, 9*50);
                setTimeout(() => {setLoading(false)}, 10*50);
*/