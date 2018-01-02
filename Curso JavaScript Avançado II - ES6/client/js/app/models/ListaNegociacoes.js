class ListaNegociacoes{
    //recebe um função que atualiza a view
    constructor(){
        this._Negociacoes=[];
       
    }
    adiciona(Negociacao){
        this._Negociacoes.push(Negociacao);
       
    }

    get negociacoes(){
        //programação defenciva, so retorna um copia do dado
            return [].concat(this._Negociacoes);
    }

    limpa(){
        this._Negociacoes=[];
       
    }
}