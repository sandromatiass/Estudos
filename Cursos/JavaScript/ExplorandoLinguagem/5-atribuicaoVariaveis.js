console.log("Trabalhando com atribuição de variáveis");

const idade = 29;
const primeiroNome = "Sandro";
const sobrenome = "Matias";

console.log(idade, primeiroNome, sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);


//sobreescrevendo da maneira correta com uma const imutavel
const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

//Utilizar  let somente quando for para criar uma variável que precise ser alterada
let contador = 0;
contador =  contador + 1;
console.log(contador * 5);

let idadeNova; //declarando variável
idadeNova = 28; //atribuindo valor
idadeNova = idadeNova + 1; //somando
console.log(`Esse ano completo ${idadeNova} anos.`); //imprimindo