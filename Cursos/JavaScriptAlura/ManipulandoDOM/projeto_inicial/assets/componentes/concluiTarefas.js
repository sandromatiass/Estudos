//criando componete
    const BotaoConclui = () =>{
        //CRIANDO O BOTÃO
        const botaoConcluir = document.createElement("button"); //criando botão

        //escutando botao
        botaoConcluir.classList.add("check-button");
        botaoConcluir.innerText = "Concluir";
        
        //arrow function evento click para concluir a tarefa.
        botaoConcluir.addEventListener("click", concluirTarefa);

        return botaoConcluir;
    }

    const concluirTarefa = (evento)=>{
        const botaoConcluir = evento.target; // target e usada para saber onde vc esta clicando

        const tarefaCompleta = botaoConcluir.parentElement; //aqui eu pego o pai do botão que e a li

        tarefaCompleta.classList.toggle("done"); //aqui ele muda para trocar a para o feito risco e o toggle devolve um valor boleano
    }

    export default BotaoConclui