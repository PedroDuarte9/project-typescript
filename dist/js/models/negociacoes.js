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
