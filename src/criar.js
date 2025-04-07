import { sumario } from "./sumario"
const linhas=6
const colunas=10
function inverter(num){
    switch(num){
        case 1:return 3
        case 0:return 2
        case 3:return 1
        case 2:return 0
    }
}

export function principal(){
    try{
        const resposta=[]
        for(let k=0; k<linhas;k++){
            let linha
            if(k==0){
                linha=criarLinha(false)
            }else{
                linha=criarLinha(resposta[k-1])
            }
            resposta.push(linha)
        }
        console.log(resposta)
        return resposta 
    }catch(e){
        console.log('deu erro na principal')
        return false
    }
}


function criarLinha(colunaCima){
try{
    const resposta=[]
    for(let k=0; k<colunas;k++){
        let quad
        if(k==0){
            quad=buscar([colunaCima?colunaCima[k].coord.split(' ')[2]:null,null,null,null])
        }else{
            quad=buscar([colunaCima?colunaCima[k].coord.split(' ')[2]:null,null,null,resposta[k-1].coord.split(' ')[1]])
        }
        resposta.push(quad)
    }
    return resposta
}catch(e){
    return false
}
}
function aleatorio(N) {
    return Math.floor(Math.random() * N);
  }
  
function buscar(coord){
    const filtrada=sumario.filter(part=>{
        for(let k =0;k<4;k++){
            const pedido=coord[k]
            if(pedido){
                if(part.coord.split(' ')[k]!=pedido){
                    return false
                }
            }
        }
        return true
    })
    const resposta=filtrada[aleatorio(filtrada.length)]
    return resposta
}
