//importando apenas a função de um documento js
import { valida } from './validacao.js'

//aqui eu seleciono todos os imputs por isso utiliza o querySelectorAll("usa seletor de tag no caso o input")
const inputs = document.querySelectorAll('input')

//criando um laço de repetição
//para cada input que nos temos criamos o evento de blur e a função valida passando por todos os inputs
inputs.forEach(input => {
    input.addEventListener('blur', (evento) =>{
        //aqui chama a função valida junto com evento de target
        valida(evento.target)
    })
})