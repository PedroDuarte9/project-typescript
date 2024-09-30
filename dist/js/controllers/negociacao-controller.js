import { Negociacoes } from './../models/negociacoes.js';
import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.data = document.querySelector('#data');
        this.quantidade = document.querySelector('#quantidade');
        this.valor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        console.log(negociacao);
        this.limpaformulario();
    }
    criaNegociacao() {
        const expReg = /-/g;
        const data = new Date(this.data.value.replace(expReg, ','));
        const quantidade = parseInt(this.quantidade.value);
        const valor = parseFloat(this.valor.value);
        return new Negociacao(data, quantidade, valor);
    }
    limpaformulario() {
        this.data.value = '';
        this.quantidade.value = '';
        this.valor.value = '';
        this.data.focus();
    }
}
