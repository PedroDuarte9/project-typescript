export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(valor) {
        this.negociacoes.push(valor);
    }
    lista() {
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
