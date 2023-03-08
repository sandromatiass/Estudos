import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Sandro", 12313233111);
const cliente2 = new Cliente("Neto", 88822233309);

const contaCorrenteSandro = new ContaCorrente(1001, cliente1);
contaCorrenteSandro.depositar(500);

const conta2 = new ContaCorrente(102, cliente2);


let valor = 200;
contaCorrenteSandro.transferir(valor, conta2)

console.log(ContaCorrente.numeroDeContas);
