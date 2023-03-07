let a = 5
let b = 7
let c = 8
if(a + b == 13){//aqui tbm
    console.log(`Se a soma de o que eu solicitei que é 12`)
}else if(c < b){ //errei de proposito teste
    console.log(`Estamos aprendendo ${c} é maior que ${b}`)
}else if(a + b == 12 & c < a){//testes
    console.log(`realmente tamo pica nessa parte`)
}else if(c - a == 4 || b > c){ //tudo false pra da else rlx vc ta manjando
    console.log(`vamos programar nessa porra`)
}else{
    console.log(`ta file carai`)
}

let nome = "Sandro"
if (nome != undefined){
    console.log("true")
}

if(nome.length > 5){
    console.log("aqui está perguntando se nome tem uma quantidade de caracteres maior que 5 - resultado e true")
}
