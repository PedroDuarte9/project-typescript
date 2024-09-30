import { Negociacao } from "./negociacao.js";

export class Negociacoes{

    private negociacoes:Array<Negociacao> = [];
       
    adiciona(valor:Negociacao){
        this.negociacoes.push(valor);
    }

    lista():ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }

}

// const negoc = new Negociacoes();
// negoc.adiciona(new Negociacao(new Date(), 2, 1.3));
// negoc.lista().forEach(n => {
//     n.data,
//     n.quantidade,
//     n.valor
// })
