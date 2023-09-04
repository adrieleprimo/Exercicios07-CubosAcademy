const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
function agendarPaciente (pacientes, operacao, nome){
    for(let i =0; i< pacientes.length;i++){
    if(nome  === pacientes[i] && operacao === "agendar"){
        let posicao = pacientes.indexOf(nome);
        pacientes.splice(posicao, 1)
        pacientes.push(nome)
    }
    }
    console.log(pacientes.join(", "))
}
agendarPaciente(pacientes, "agendar", "Ana");

function atenderPaciente(pacientes, operacao){
    for(let i =0; i<pacientes.length; i++){
        if(operacao === "atender"){
           pacientes.splice(pacientes[i], 1)
        }

    }
    console.log(pacientes.join(", "))

}
atenderPaciente(pacientes, "atender");

function cancelarAtendimento (pacientes, operacao, nome){
    for(let i =0; i< pacientes.length;i++){
        if(nome === pacientes[i] && operacao === "cancelar"){
            let posicao = pacientes.indexOf(nome);
           pacientes.splice(posicao, 1)
        }
    }
    console.log(pacientes.join(", "))
}
cancelarAtendimento(pacientes, "cancelar", "Bárbara");