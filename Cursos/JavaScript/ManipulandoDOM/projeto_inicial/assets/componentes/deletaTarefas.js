const BotaoDeleta = () => {
        const botaoDeleta = document.createElement("button");
        
        botaoDeleta.innerText = "Deletar";
        botaoDeleta.addEventListener("click", deletarTarefa);
        
        return botaoDeleta;
    }

    const deletarTarefa =(evento) => {
        const botaoDeleta = evento.target ;

        const tarefaCompleta = botaoDeleta.parentElement //aqui seleciona a li

        tarefaCompleta.remove() //remove a li criada
        

        return botaoDeleta;
    }

    export default BotaoDeleta