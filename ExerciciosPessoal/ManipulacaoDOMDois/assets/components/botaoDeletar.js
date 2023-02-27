const BotaoDeletar = () => {
    const botaoDelete = document.createElement("button")

    
    botaoDelete.innerText = "Excluir";
    botaoDelete.classList.add("botaoDeletar")
    botaoDelete.addEventListener("click", deletando)


    return botaoDelete;
}

const deletando = (evento) => {
    const botaoDelete = evento.target;

    const deletando = botaoDelete.parentElement;

    deletando.remove();

}

export default BotaoDeletar;