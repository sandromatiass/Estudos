//quando e default e que no caso se não for passado o expoente utilizar o valor indicado.
function potencia(base, exp=2){
    return Math.pow(base, exp);
}

console.log(potencia(2));

console.log(potencia(2, 2));

console.log(potencia(2, 3));

