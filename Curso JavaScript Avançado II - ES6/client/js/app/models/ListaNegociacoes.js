class ListaNegociacoes{
    //recebe um função que atualiza a view
    constructor(fAtualiza){
        this._Negociacoes=[];
        this._atualiza= fAtualiza
    }
    adiciona(Negociacao){
        this._Negociacoes.push(Negociacao);
        this._atualiza(this);
    }

    get negociacoes(){
        //programação defenciva, so retorna um copia do dado
            return [].concat(this._Negociacoes);
    }

    limpa(){
        this._Negociacoes=[];
        this._atualiza(this);
    }
}