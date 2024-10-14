import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controllerNegociacao = new NegociacaoController();
const form = document.querySelector('.form');

form.addEventListener('submit', elemento => {
    elemento.preventDefault();
    controllerNegociacao.adiciona();
})

