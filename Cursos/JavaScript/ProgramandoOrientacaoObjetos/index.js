import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Sandro", 12313233111);

const contaCorrenteSandro = new ContaCorrente(cliente1, 1001);
contaCorrenteSandro.depositar(500);
contaCorrenteSandro.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

console.log(contaCorrenteSandro);
console.log(contaPoupanca)
