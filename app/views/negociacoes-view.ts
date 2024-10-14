import { NegociacaoController } from "../controllers/negociacao-controller.js"
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView{
    private elemento: HTMLElement; // Aqui ficará o elemento dessa classe que irá receber o seletor da pagina index.html

   constructor(seletor: string){    
        this.elemento = document.querySelector(seletor); // A partir do nosso elemento, faremos um construtor que recebe por parâmetro um seletor css quando criamos uma instância do objeto na classe controller
   }

    template(model : Negociacoes):string {
    return  `
        <table class="table table-dark table-hover">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALUE</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(item => {
                    return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(item.data)}</td>
                            <td>${item.quantidade}</td>
                            <td>${item.valor}</td>
                        </tr>
                    `;
                })}
            </tbody>
        </table>
        `;
    }
      
    //Aqui foi criado um método onde o elemento através do metodo innerHTML irá receber o template que foi criado acima, e emostrará dinamenicamente na tela.
    update(model: Negociacoes) : void {
        const template = this.template(model)
        console.log(template)
        this.elemento.innerHTML = template;
    }
}