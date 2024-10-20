import { Negociacao } from "./negociacao.js";

export class Negociacoes{

    private negociacoes:Array<Negociacao> = [];
       
    public adiciona(valor:Negociacao){
        this.negociacoes.push(valor);
    }

    public lista():ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }

}
