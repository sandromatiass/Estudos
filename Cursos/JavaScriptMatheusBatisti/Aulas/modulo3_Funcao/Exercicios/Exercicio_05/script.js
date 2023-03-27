function autoEscola(idade) {
    if(idade >= 18){
        console.log('Você já es maior de idade pode fazer sua inscrição!');
    }else {
        console.log('Você e menor de idade não pode fazer a inscrição!');
    }
}

autoEscola(18);
autoEscola(16);
//por que sempre retorna o paramentro 
//para que sempre possa ser feito a alteração ou facilitar o acesso a complementação de dados