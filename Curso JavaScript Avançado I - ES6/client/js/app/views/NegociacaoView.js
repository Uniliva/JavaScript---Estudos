class NegociacaoView extends View{
    constructor(elemento){
       super(elemento);
    }

    template(listaNegociacao){
        //uso o join para que não fique as aspas da nova string gerada a cada volta do map
        return `<table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        <tbody> 
        ${
            listaNegociacao.negociacoes.map(n => `
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
                    `).join("")
                }
        </tbody>

        <tfoot>
            <td colspan="3" style="text-align: right">Total</td>
            <td>${
                //estou reduzindo esta lista para obter o total
                 listaNegociacao.negociacoes.reduce((t,n) => t+n.volume,0.0)
            }</td>
        </tfoot>
        `
    }

}