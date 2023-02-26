import BotaoConclui from "./concluiTarefas.js";
import BotaoDeleta from "./deletaTarefas.js";

    const criarTarefa = (evento) => {
    //buscando dados do input
    evento.preventDefault();

    const lista = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const valor = input.value
    console.log(valor);

    //criando um elemento
    const tarefa = document.createElement("li"); // criando o elemento li
    tarefa.classList.add('task')// li com a class
    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;

    
    tarefa.appendChild(BotaoConclui()); //adicionando botao sempre colocar parenteses depois de citar uma função criada
    tarefa.appendChild(BotaoDeleta()); //criando botão deletar
    lista.appendChild(tarefa);//aqui informa que estou criando um elemento filho, sempre vai colocar a tarefa no final do nó
    input.value = " ";
    }

    const novaTarefa = document.querySelector("[data-form-button]");

    novaTarefa.addEventListener("click", criarTarefa);