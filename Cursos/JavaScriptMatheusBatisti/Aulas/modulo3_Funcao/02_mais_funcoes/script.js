function somandoNumeros (x, y, z){
    return x + y + z;
}

console.log(somandoNumeros(10, 20, 30));

const soma = somandoNumeros(18, 17, 15);

console.log(`O valor da nova soma é ${soma}`);


function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh == true){
    console.log("Pode dirigir");
    }else{
        console.log("Você não pode dirigir.")
    }
}

podeDirigir(18, true);