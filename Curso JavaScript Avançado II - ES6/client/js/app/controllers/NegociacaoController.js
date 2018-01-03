class NegociacaoController {

    constructor() {
        //Para evitar de pecorrer a DOM toda ves e recomendado que faça ligações entre os elementos e os atributos do controler no
        //construtor que ira fazer-la assim que for executdao pela primeira vez
        let $ = document.querySelector.bind(document);
        this._idata = $("#data")
        this._iqtd = $("#quantidade")
        this._ivalor = $("#valor")
        this.lista = new Bind(new ListaNegociacoes(), new NegociacaoView($("#negociacaoView")), 'adiciona', 'limpa');

        this._mensagem = new Bind(new Mensagem(), new MensagemView($("#msg")), "texto");

    }
    adiciona(event) {
        event.preventDefault();

        this.lista.adiciona(this._criaNegociacao());
        this._limpaForm();
        this._mensagem.texto = "Negociação Adicionada!";
    }
    _criaNegociacao() {
        let data = DateHelper.textoParaData(this._idata.value);
        return new Negociacao(data, this._iqtd.value, this._ivalor.value);
    }

    _limpaForm() {
        this._idata.value = "";
        this._iqtd.value = 1;
        this._ivalor.value = 0;
        this._idata.focus();
    }

    apaga() {

        this.lista.limpa();
        this._mensagem.texto = "Negociações removidas com sucesso!";
    }

    importaNegociacao() {
        let service = new NegociacaoService();
        service.obterNegociacaoSemana((erro,negociacao)=>{
            if(erro){
                this._mensagem.texto=erro;
                return;
            }

            negociacao.forEach(n => {
                this.lista.adiciona(n);  
                this._mensagem.texto="Negociações importadas";              
            });
        });
       
    }



}
