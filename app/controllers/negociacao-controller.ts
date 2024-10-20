import { Negociacoes } from './../models/negociacoes.js';

import { Negociacao } from "../models/negociacao.js";
import { NegociacoesView } from '../views/negociacoes-view.js';
import { MensagemView } from '../views/mensagem-view.js';

export class NegociacaoController{

    private data:HTMLInputElement;
    private quantidade:HTMLInputElement;
    private valor:HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacaoView = new NegociacoesView('#tabela'); //Aqui é criado uma instância da classe que tem a tabela, e por parâmetros passamos o id do index.html o pra monstar a tabela dinamicamente
    private mensagemView = new MensagemView("#mensagemView");


    constructor(){
        this.data = document.querySelector('#data');
        this.quantidade = document.querySelector('#quantidade');
        this.valor = document.querySelector('#valor');
        this.negociacaoView.update(this.negociacoes); //Aqui é chamado o método para renderizar a criação da tabela
    }

    adiciona():void{
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.negociacaoView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
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