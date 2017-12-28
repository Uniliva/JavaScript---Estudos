class NegociacaoController {

    constructor() {
        //Para evitar de pecorrer a DOM toda ves e recomendado que faça ligações entre os elementos e os atributos do controler no
        //construtor que ira fazer-la assim que for executdao pela primeira vez
        let $ = document.querySelector.bind(document);
        this._idata = $("#data")
        this._iqtd = $("#quantidade")
        this._ivalor = $("#valor")
        this.lista = new ListaNegociacoes();
        this._dnegociacao= new NegociacaoView($("#negociacaoView"));
        this._mensagem = new MensagemView($("#msg"));

        this._dnegociacao.update(this.lista);
    }
    adiciona(event) {
        event.preventDefault();        
        this.lista.adiciona(this._criaNegociacao());
        this._dnegociacao.update(this.lista);
      
        this._limpaForm();
        
        this._mensagem.update(new Mensagem("Negociação Adicionada!"))

      
    }
    _criaNegociacao(){
        let data = DateHelper.textoParaData(this._idata.value);
        return  new Negociacao(data,this._iqtd.value, this._ivalor.value);
    }

    _limpaForm(){
        this._idata.value="";
        this._iqtd.value=1;
        this._ivalor.value=0;
        this._idata.focus();
    }
    


}
