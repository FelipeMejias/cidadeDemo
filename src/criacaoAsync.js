import { principal } from "./criar";

export function criarAsync() {
    return new Promise((resolve) => {
      function tentar() {
        const resultado = principal();
        if (checar(resultado)) {
          resolve(resultado);
        } else {
          setTimeout(tentar, 10); // espera 10ms antes de tentar de novo
        }
      }
      tentar();
    });
  }
  


function checar(resposta){
    for(let linha of resposta){
        if(!linha)return false
    }
    return true
}