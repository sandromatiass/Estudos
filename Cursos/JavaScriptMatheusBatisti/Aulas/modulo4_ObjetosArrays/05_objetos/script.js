let funcionario = {
    //propiedades
    nome: 'Sandro',
    sobrenome: 'Matias',
    idade: 28,
    cargo: 'Suporte T.I.',
    //criando metodos
    apresentar: function(){
        console.log('Já Abriu o chamado!')        
    }
}

console.log(funcionario.nome); // acessando as propiedades dentro do objeto
// Não e necessário colocar dentro de um cosole log pq já tem um console dentro da função.
funcionario.apresentar()