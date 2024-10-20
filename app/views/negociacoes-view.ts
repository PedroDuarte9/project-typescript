import { NegociacaoController } from "../controllers/negociacao-controller.js"
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes>{
    

   protected template(model : Negociacoes):string {
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
                            <td>${this.formatarData(item.data)}</td>
                            <td>${item.quantidade}</td>
                            <td>${item.valor}</td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
        `;
    }

    private formatarData(data:Date){
        return new Intl.DateTimeFormat().format(data);
    }
      
}