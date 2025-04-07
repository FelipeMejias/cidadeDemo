import { sumario } from "./sumario"

export function extrairNomes(listaDeListas){
    const resposta=[]
    for(let lista of listaDeListas){
        const semiResposta=[]
        for(let item of lista){
            semiResposta.push(item.nome)
        }
        resposta.push(semiResposta)
    }
    
    return resposta
}
export function extrairObjetos(listaDeListas){
    try{
        const resposta=[]
        for(let lista of listaDeListas){
            const semiResposta=[]
            for(let nome of lista){
                semiResposta.push(buscarObjeto(nome))
            }
            resposta.push(semiResposta)
        }
        return resposta
        
    }catch(e){
        console.log('deu erro na extrairObjetos')
        return false
    }
    
}
function buscarObjeto(nome){
    for(let item of sumario){
        if(item.nome==nome){
            return item
        }
    }
}
function inverter(num){
    switch(num){
        case 1:return 3
        case 0:return 2
        case 3:return 1
        case 2:return 0
    }
}

export function principal(linhas,colunas){
    try{
        const resposta=[]
        for(let k=0; k<linhas;k++){
            let linha
            if(k==0){
                linha=criarLinha(false,colunas)
            }else{
                linha=criarLinha(resposta[k-1],colunas)
            }
            resposta.push(linha)
        }
        return resposta 
    }catch(e){
        console.log('deu erro na principal')
        return false
    }
}


function criarLinha(colunaCima,colunas){
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
