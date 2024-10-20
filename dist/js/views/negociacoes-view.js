import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
        return `
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
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}
