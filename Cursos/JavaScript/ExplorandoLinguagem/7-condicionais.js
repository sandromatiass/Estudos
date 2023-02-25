console.log(`Tabalhando com condicionais.`);

const listaDeDestinos = new Array(
    `Salvador`,`Sãopaulo`, `Rio de Janeiro`, `Maceió`
    );

listaDeDestinos.push(`Minas gerais`, `Criciúma`);


//lista completa
console.log(`Destino possíveis`);
console.log(listaDeDestinos);

//lista aqui retiro o segundo item da lista que é são paulo
listaDeDestinos.splice(1,1);
console.log(`Deletando itens da lista`);
console.log(listaDeDestinos);

//impressão de apenas 1 item que é Maceió
console.log(`Imprimindo apenas um intem:`);
console.log(listaDeDestinos[2]);

//condicional comprador maior de idade
// Quando o comprador for maior menos minas gerais
const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;
if(idadeComprador >= 18){
    console.log(`Comprador maior de idade`);
    listaDeDestinos.splice(2,1);
    console.log(listaDeDestinos)
}else if(estaAcompanhada){
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(2,3);
    console.log(listaDeDestinos)
}else{
    console.log("Comprador e menor de idade não posso vender")
}

//outra condição simplificada

if (
    idadeComprador >= 18 ||
    estaAcompanhada == false
    ){
    console.log("Boa viagem!");
    listaDeDestinos.splice(1,1);
    console.log(listaDeDestinos);
}else{
    console.log("Não está acompanhado");
}

console.log("Embarque: \n\n");

if(idadeComprador >= 18 && temPassagemComprada){
        console.log("boa viagem!");
}else{
    console.log("Você não pode embarcar");
}