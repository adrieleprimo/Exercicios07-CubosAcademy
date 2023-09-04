function ordemFrutas (frutas){
    const novaOrdem = frutas.reverse();
    const juncao = novaOrdem.join(", ");
    const reverso = novaOrdem.reverse();
    let primeiroItem = reverso.splice(1);
    let segundoItem = primeiroItem.splice(primeiroItem, primeiroItem.length-1)
     segundoItem.push("Melão")
   
    console.log(segundoItem)
}
const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
ordemFrutas(frutas);