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
