console.log(`Tabalhando com condicionais - LOOPS`);

const listaDeDestinos = new Array(
    `Salvador`,`Sãopaulo`, `Rio de Janeiro`, `Maceió`
    );

listaDeDestinos.push(`Minas gerais`, `Criciúma`);

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const idadeComprador = 17;
const estaAcompanhada = true;
let temPassagemComprada = true;
const destino = "Maceió";

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

//indica de onde vai começar a contagem da lista sempre que tiver uma lista e precisarmos passar por ela deve ser adicionado
// uma variavel contador
let i = 0;
let destinoExiste = false;
while(i < 6){

    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
        break;
    }

    i += 1; 
}

console.log("Destino existe:", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem!")
}else{
    console.log("Desculpe o destino não existe")
}

//for(variavel de inicialização de contagem ; até onde vai rodar o código ; quantos saltos vai dar a contagem)
// o i substitui o contador e o ++ substitui o += 1

for(let cont = 0; i < 6; i += 1){

    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
        
    }

}