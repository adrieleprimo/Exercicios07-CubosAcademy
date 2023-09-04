function gruposDeCarros(carros, numeroInteiro){
    carros = nomes.splice(numeroInteiro, 3);
    console.log(carros.join(" - "))
}
const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;
gruposDeCarros(nomes, posicao);