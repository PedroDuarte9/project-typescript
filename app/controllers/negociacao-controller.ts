import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController{

    private data:HTMLInputElement;
    private quantidade:HTMLInputElement;
    private valor:HTMLInputElement;

    constructor(){
        this.data = document.querySelector('#data');
        this.quantidade = document.querySelector('#quantidade');
        this.valor = document.querySelector('#valor');
    }

    adiciona():void{
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
        this.limpaformulario();
    }

    criaNegociacao():Negociacao{
        const expReg = /-/g;
        const data = new Date(this.data.value.replace(expReg, ','));
        const quantidade = parseInt(this.quantidade.value);
        const valor = parseFloat(this.valor.value);
        return new Negociacao(data, quantidade, valor); 
    }

    limpaformulario():void{
        this.data.value = '';
        this.quantidade.value = '';
        this.valor.value = '';
        this.data.focus();
    }
}