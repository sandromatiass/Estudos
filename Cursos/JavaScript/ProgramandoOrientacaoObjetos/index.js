//trabalhando com class
//1- criando uma class
class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

//criando uma variável para novo cliente
const cliente1 = new Cliente();
const cliente2 = new Cliente();

//criando propiedade para o cliente
cliente1.nome = "Sandro";
cliente1.cpf =  11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 12543688;


cliente2.nome = "Neto";
cliente2.cpf =  88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1, cliente2);