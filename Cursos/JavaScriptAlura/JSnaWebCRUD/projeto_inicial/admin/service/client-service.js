//abrindo comunicação com api

//Inicialisando arquivo xml como vai utilizar varias vezes foi criado uma constate
const http = new XMLHttpRequest();

//abrindo a comunicação usando metodo open
// aqui ele pega as informações do servidor
http.open('GET', 'http://localhost:3000/profile')

//e aqui ele envia
http.send();

//onload ao carregar a pagina
http.onload = () => {
    const data = http.response
    console.log(object)
}

//simular um serviço de api e == a mockar estudar mais sobre