const BotaoConcluir = () => {
    
    
    const botaoConcluir = document.createElement("button");
    
    botaoConcluir.classList.add("botaoConcluir");
    
    botaoConcluir.innerText = "CONCLUIR";

    botaoConcluir.addEventListener("click", tarefaConcluida)
    

    return botaoConcluir;
}

const tarefaConcluida = (evento) => {
    const botaoConcluir = evento.target;
    
    const tarefaConcluida = botaoConcluir.parentElement;

    tarefaConcluida.classList.toggle("estiloConcluido", "botaoClicado"); 
}


export default BotaoConcluir