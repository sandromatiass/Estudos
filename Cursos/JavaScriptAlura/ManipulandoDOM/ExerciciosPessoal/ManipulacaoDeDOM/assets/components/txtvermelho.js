 const BotaoVermelho = () => {
    const botaoRed = document.createElement("button");

    botaoRed.innerText = 'vermelho';
    
    botaoRed.addEventListener("click", textoVermelho)

    return botaoRed;
}

const textoVermelho = (evento) =>{
    const botaoRed = evento.target;

    const textoVermelho = botaoRed.parentElement;

    textoVermelho.classList.toggle("textoVermelho")
}

export default BotaoVermelho;