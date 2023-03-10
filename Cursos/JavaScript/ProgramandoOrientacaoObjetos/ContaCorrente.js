import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";


//criando uma declaração na class extend a class
//criando uma eranção o mesmo quando chamamos esse extends todo o codigo que tem em conta e herdado pela conta corrente
export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    constructor(cliente, agencia){
        //Chamando o construtor 
        super(0, cliente, agencia);
       ContaCorrente.numeroDeContas += 1;
    }
}
