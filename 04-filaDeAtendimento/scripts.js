const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
function filadeAtendimento(pacientes, operacao, nome){
    for(let i =0; i<pacientes.length;i++){
        if(operacao === "agendar" && nome === pacientes[i] ){
            let posicao = pacientes.indexOf(nome)
           let novaOrdem = pacientes.splice(posicao+1, pacientes.length)
             novaOrdem.push(nome)
            console.log(novaOrdem.join(", "))
            
        } else if (operacao === "atender" && nome ===pacientes[i]){
           pacientes.shift();
            console.log(pacientes.join(", "))
      
        }
    }
}
filadeAtendimento(pacientes, "agendar", "José")