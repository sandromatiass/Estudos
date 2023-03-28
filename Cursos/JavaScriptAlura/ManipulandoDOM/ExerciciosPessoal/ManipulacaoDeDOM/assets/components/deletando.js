const Deletando = () => {

    const limpar = document.createElement("button");
    
    limpar.innerText = "LIMPAR"
    limpar.addEventListener("click", limpando)

    return limpar;
}

const limpando = (evento) => {
    const limpar = evento.target;

    const limpando = limpar.parentElement;

    limpando.remove();

    return limpar;
}

export default Deletando