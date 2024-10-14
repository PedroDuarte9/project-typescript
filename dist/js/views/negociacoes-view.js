export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor); // A partir do nosso elemento, faremos um construtor que recebe por parâmetro um seletor css quando criamos uma instância do objeto na classe controller
    }
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
                            <td>?</td>
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
        this.elemento.innerHTML = template;
    }
}
