function divisaoGrupos(nomes, numeroInteiro){
 let grupoUm = nomes.slice(0, numeroInteiro)
let juncaoUm = grupoUm.join(", ")
let grupoDois = nomes.slice(numeroInteiro);
let juncaoDois = grupoDois.join(", ");
 console.log(`Grupo 1: ${juncaoUm}.`)
 console.log(`Grupo 2: ${juncaoDois}.`)
}

const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;
divisaoGrupos(nomes, tamanhoDoGrupo)