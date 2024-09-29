import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.data = document.querySelector('#data');
        this.quantidade = document.querySelector('#quantidade');
        this.valor = document.querySelector('#valor');
    }
    adiciona() {
        let dataParseada = Date.parse(this.data.value);
        let dataFormatada = new Date(dataParseada).toDateString();
        const negociacao = new Negociacao(dataFormatada, Number.parseInt(this.quantidade.value), Number.parseFloat(this.valor.value));
        console.log(negociacao);
    }
}
