let a = 5
let b = 7
let c = 8
if(a + b == 13){// aqui eu pergunto se a soma de a + b e igual a 13 o valor tem que ter o resultado absoluto
    console.log(`Se a soma de o que eu solicitei que é 12`)
}else if(c < b){ //aqui eu pergunto se c tem um valor meno que b
    console.log(`Estamos aprendendo ${c} é maior que ${b}`)
}else if(a + b == 12 & c < a){//aqui eu pergunto se a + b e igual a 12 e se c e menor que a os valores tem que da exatos para poder retornar true
    console.log(`realmente tamo pica nessa parte`)
}else if(c - a == 4 || b > c){ //aqui eu pergunto se c - a e igual a 4 ou se b e maior que c um dos valores tem que retorna true para que a função retorne algum valor
    console.log(`vamos programar nessa porra`)
}else{
    console.log(`ta file carai`)
}

let nome = "Sandro"
if (nome != undefined){ //aqui eu pergunto se o nome é diferente de undefined se for diferente no caso se tiver um valor retonar a função como true
    console.log("true")
}

if(nome.length > 5){ //aqui a gente pergunta se nome tem a quantidade de caractere maior que 5 se sim retorna true
    console.log("aqui está perguntando se nome tem uma quantidade de caracteres maior que 5 - resultado e true")
}
