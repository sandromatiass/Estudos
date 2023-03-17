const idade = 12;
const cnh = false;

if(idade >= 18 && cnh == false){
    console.log(`Você tem ${idade} mas não posssui habilitação - não pode dirigir.`);
}else if(idade >= 18 && cnh == true){
    console.log(`Você tem ${idade} e possui habilitação - pode dirigir.`)
}else{
    console.log(`Você é menor de idade e não tem habilitação -  Não toque no carro.`)
}