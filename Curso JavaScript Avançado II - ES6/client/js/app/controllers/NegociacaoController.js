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
        //Promisse all permite que se parsse um conjuto de promisse e execute apenas um the e um catch
        Promise.all([service.obterNegociacaoSemana(), service.obterNegociacaoSemanaAnterior(), service.obterNegociacaoSemanaRetrasada()])
            .then(ConjuntoListaNegociacao => {
                ConjuntoListaNegociacao.reduce((listaTotal, listaParcial) => listaTotal.concat(listaParcial))
                    .forEach(negociacao => this.lista.adiciona(negociacao));
                this._mensagem.texto = "Negociações importadas com sucesso!";

            }).catch(erro => this._mensagem.texto = erro);

        /*
    
        service.obterNegociacaoSemana().then(lista => {
            lista.forEach(n => { this.lista.adiciona(n); });
            this._mensagem.texto = "Negociações da semana importadas com sucesso!";
        }).catch(erro => this._mensagem.texto = erro);
    
    
    
    
        service.obterNegociacaoSemanaAnterior().then(negociacao => {
            negociacao.forEach(n => { this.lista.adiciona(n); });
            his._mensagem.texto = "Negociações da semana Anterior importadas com sucesso!";
        }).catch(erro => this._mensagem.texto = erro);
    
        service.obterNegociacaoSemanaRetrasada().then(negociacao => {
            negociacao.forEach(n => { this.lista.adiciona(n); });
            his._mensagem.texto = "Negociações da semana importadas com sucesso!";
        }).catch(erro => this._mensagem.texto = erro);
    */

    }



}
