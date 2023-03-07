import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Sandro";
cliente1.cpf =  11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Neto";
cliente2.cpf =  88822233309;


const contaCorrenteSandro = new ContaCorrente();
contaCorrenteSandro._saldo = 0;
contaCorrenteSandro.agencia = 1001;
contaCorrenteSandro.cliente = cliente1;
contaCorrenteSandro.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

contaCorrenteSandro.transferir(200, conta2);


console.log(conta2);
