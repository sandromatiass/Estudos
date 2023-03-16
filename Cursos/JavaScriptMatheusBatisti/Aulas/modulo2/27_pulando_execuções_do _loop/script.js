/*
    Enquanto x for menor que 11 executar a função do codigo abaixo pulando apenas
    os valores que obtiverem o resultado do resto da  divisão == 0
    ele so numero par ele pula 
    mostrando apenas os impares
*/

let x = 0

while(x < 11) {
    x++;
    if(x % 2 == 0){
        continue;
    }
    console.log(x);
    x++;
}

/**/

for(let i = 10; i > 0; i--){
    if(i % 2 == 0){
        console.log("caiu no continue");
        continue;
    }
    console.log(i);
}

for(let y = 0; y < 10; y++) {
    if(y % 2 == 0) {
    console.log("ainda não");
    continue;
    }
    console.log(`agora sim ${y}`)
}