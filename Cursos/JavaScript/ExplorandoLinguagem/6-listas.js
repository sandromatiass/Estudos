console.log(`Tabalhando com listas.`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,`Sãopaulo`, `Rio de Janeiro`, `Maceió`
    );

listaDeDestinos.push(`Minas gerais`, `Criciúma`);

console.log(`Destino possíveis`);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(`Deletando itens da lista`);
console.log(listaDeDestinos);

console.log(`Imprimindo apenas um intem:`);
console.log(listaDeDestinos[2]);