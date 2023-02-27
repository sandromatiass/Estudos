import BotaoConcluir from "./botaoConcluir.js"
import BotaoDeletar from "./botaoDeletar.js"

const criandoTarefas = (evento) => {
    
    evento.preventDefault();

    const criaIntes = document.querySelector("[data-ul-intens]");
    const txtArea = document.querySelector("[data-form-input]");
    const valorTxtArea = (txtArea.value);

    const criaTarefas = document.createElement("li");
    criaTarefas.classList.add("tarefas__itens")
    const criaLista = `<p>${valorTxtArea}</p>`;

    criaTarefas.innerHTML = criaLista;
    criaIntes.appendChild(criaTarefas);
    criaTarefas.appendChild(BotaoConcluir());
    criaTarefas.appendChild(BotaoDeletar());
    txtArea.value = " ";
}

const botao = document.querySelector("[data-form-button]");

botao.addEventListener("click", criandoTarefas);