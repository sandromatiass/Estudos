import BotaoVermelho from "./txtvermelho.js";
import Deletando from "./deletando.js";

const criandoEvento = (evento) => {
    evento.preventDefault();
    
    const listaUl = document.querySelector("[data-list]");
    const areaDeTexto = document.querySelector("[data-form-input]");
    const valor = areaDeTexto.value;
    console.log(valor);

    const criaLi = document.createElement("li");
    
    const criaPemLi = `<p>${valor}</p>`;

    criaLi.innerHTML = criaPemLi;

    criaLi.appendChild(BotaoVermelho())
    criaLi.appendChild(Deletando())
    listaUl.appendChild(criaLi);
    areaDeTexto.value = " ";
}


const botao = document.querySelector("[data-form-button]")

botao.addEventListener("click", criandoEvento)