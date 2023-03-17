//aqui em cima ele calcula o resto do valor e so sai quando o valor atingi as divisoes até chegar em 0 que e o resto 

for(let i = 2; i < 20; i += 1) {
    if(i % 18 == 0) {
        console.log('saiu do loop');
        break;
    }
    console.log('proceguir com loop');
}


// lembra que a variavel que vamos alterar sempre deve estar fora do laço
//aqui informamos ao laço que o mesmo devera se repetir até o numero 3 alterar a variavel no nº3 para neto
//e ao chegar no 5 sair do laço pelo break e imprimir o console log na tela
let nome = "sandro";

for(let i = 0; i < 10; i++){
    
    if(i == 3) {
        nome = "neto";
    }

    if(i == 5 && nome == "neto") {
        console.log("O nome e neto pode parar");
        break;
    }
    console.log(i);
}