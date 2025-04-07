import styled from "styled-components";
import { useEffect, useState } from "react";
import Canva from "./Canva";
import { Quad } from "./Quad";
import Barrinha from "./Barrinha";
import { criarAsync } from "./criacaoAsync";
import { Rings, ThreeDots, Oval } from "react-loader-spinner";
import { extrairNomes , extrairObjetos } from "./criar";
export function CidadePc(){
    const [listaDeListas,setListaDeListas]=useState([])
    const [loading,setLoading]=useState(false)
    const [title,setTitle]=useState('')
    const [cidades,setCidades]=useState(
        JSON.parse(localStorage.getItem('cidades'))||[])
    const [salvavel,setSalvavel]=useState(true)
    function salvar(){
        setCidades([...cidades,{nome:title,listaDeListas:extrairNomes(listaDeListas)}])
        setTitle('')
        setSalvavel(false)
    }
    function executar(){
        setLoading(true)
        async function iniciar() {
            const resultado = await criarAsync(4,8);
            setListaDeListas(resultado);
            setLoading(false)
          }
        iniciar();
        setSalvavel(true)
    }
    useEffect(executar, []);
    useEffect(()=>{localStorage.setItem('cidades', JSON.stringify(cidades))},[cidades])
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
            <Menu>
            <Button onClick={executar}>
                Gerar Novamente
            </Button>
            {salvavel?<input 
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="Nomeie sua cidade..."
            />:<></>}
            {title&&salvavel?<Button onClick={salvar}>
                Salvar cidade
            </Button>:<></>}

            <Cidades>
                {cidades.map(cid=><Cid onClick={()=>{
                    const novaLista=extrairObjetos(cid.listaDeListas)
                    setListaDeListas(novaLista)
                }}>
                    <p>{cid.nome}</p>
                </Cid>)}
            </Cidades>
            </Menu>
            
        </Tela>
    )
}
const Button=styled.div`cursor:pointer;
height:40px;width:160px;background:green;
border-radius:50px;color:white;
justify-content:center;
align-items:center;
`
const Tela=styled.article`
justify-content:space-evenly;
align-items:center;
background:#B5E61D;
width:100vw;height:100dvh;
display:flex;
@media(max-width:650px){
display:none
}
`
const Holder=styled.div`
flex-direction:column;
justify-content:center;
align-items:center;
background:red;
width:180vh;
height:90vh;
@media(max-width:650px){
width:88vw;
height:110vw
}
`

const Menu=styled.div`
flex-direction:column;
justify-content:center;
align-items:center;
width:calc(100vw - 180vh - 90px);
height:100%;
input{
background:#e2e8ce;
border-radius:50px;height:40px;width:150px;
border:0;padding-left:10px;margin:50px 0 20px 0;
box-sizing:border-box;
}
`

const HolderLinha=styled.div`
justify-content:center;
align-items:center;
width:100%;
height:${100/4}%;
@media(max-width:650px){
height:${100/5}%
}
`
const Cidades=styled.div`
justify-content:center;
align-items:center;
flex-direction:column;
width:100%;
height:300px;overflow:auto;
`
const Cid=styled.div`cursor:pointer;
height:40px;width:160px;background:#eff716;
border-radius:50px;
justify-content:center;
align-items:center;margin-bottom:10px;
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