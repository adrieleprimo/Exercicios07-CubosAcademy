const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
  
]

function encontrarDono (nome, pets){
    for(let i =0; i<usuarios.length; i++){
        let pet = "Max";
        if(usuarios[i].pets.includes(pet)){
            console.log(`O dono(a) do(a) ${usuarios[i].pets} é o(a) ${usuarios[i].nome}`)
            break;
        } else {
           console.log(`Que pena ${pet}, não encontramos seu dono(a).`)
           break;
           
        }
    }
}
encontrarDono(usuarios);
