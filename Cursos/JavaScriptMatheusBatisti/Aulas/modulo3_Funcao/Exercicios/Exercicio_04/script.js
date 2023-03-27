function numAleatorio() {
    return Math.random()
}

console.log(numAleatorio())

/* Se eu quiser uma sequencia de numero de um valor até outro de forma aleatoria mais que eu possa controlar para onde vai
e onde começar fazer da forma abaixo*/

function numAleatorio2(num) {
    return Math.floor(Math.random() * num) + 1;
}

console.log(numAleatorio2(10))

// se eu passar um paramentro tenho que retornar o mesmo no console.log