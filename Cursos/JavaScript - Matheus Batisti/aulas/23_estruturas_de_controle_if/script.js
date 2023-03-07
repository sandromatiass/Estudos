let idade = 18
if(idade >= 18){
    console.log("Pode Entrar")
}

let nome = 'Sandro'
if(nome == "Sandro"){
    console.log("Bem-vindo")
}

let bebidas = true

if(nome == "Sandro" && idade >= 18 || bebidas == true){ //nessa estrutura mesmo com apenas 1 true passa so quando e && apenas ela tem que ser true dos dois lados
    console.log(`Seja bem vindo ${nome}, você já tem ${idade} anos, e é ${bebidas} que vai beber hoje!`)
}