class NegociacaoController {

    constructor() {
        //Para evitar de pecorrer a DOM toda ves e recomendado que faça ligações entre os elementos e os atributos do controler no
        //construtor que ira fazer-la assim que for executdao pela primeira vez
        let $ = document.querySelector.bind(document);
        this._idata = $("#data")
        this._iqtd = $("#quantidade")
        this._ivalor = $("#valor")
        this._negociacaoView = new NegociacaoView($("#negociacaoView"));
        this.lista = ProxyFactory.create(new ListaNegociacoes(), ['adiciona', 'limpa'], (model) => this._negociacaoView.update(model));
        this._negociacaoView.update(this.lista);


        this._mensagemView = new MensagemView($("#msg"))
        this._mensagem = ProxyFactory.create(new Mensagem(), ["texto"], (model) => this._mensagemView.update(model));
        this._mensagemView.update(this._mensagem);
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



}
