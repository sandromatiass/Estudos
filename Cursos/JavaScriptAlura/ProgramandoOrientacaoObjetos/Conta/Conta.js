export class Conta{
     constructor(saldoInicial, cliente, agencia){
       
        //colocando regra para não ser adicionando uma conta de forma errada usando o new conta
        //class abstrata e uma classe que não pode ser adiconado nada apenas exportado ou inportado

        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objet do tipo Conta Diretamente, pois essa é uma class abstrata.")
        }
       
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        } 
    }

    get saldo(){
        return this.saldo;
    }

    get cliente(){
        return this._cliente;
    }

    sacar(valor){
       throw new Error("O método sacar da conta é abstrato");
    }

    _sacar(valor, taxa){
        const valorSacado = valor * taxa;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        } 
        
        return 0;
    }

    depositar(valor) {

        this._saldo += valor;
    }
    
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}