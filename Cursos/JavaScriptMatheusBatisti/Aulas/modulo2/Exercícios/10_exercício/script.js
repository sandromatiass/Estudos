//COMO SABER SE O NÚMERO E PRIMO

let num = 4; 
let divisoes = 0;

for(let i = 1; i <= num; i++){
    if(num % i == 0){
        divisoes++
    }
    
}

if(divisoes == 2){
    console.log(`O número ${num} é um número primo.`)
}else{
    console.log(`O número ${num} não é um número primo.`)
}