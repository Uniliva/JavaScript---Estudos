class Negociacao{
    constructor(data, qtd,valor){
        this._data=new Date(data);
        this._quantidade= qtd;
        this._valor = valor;
        Object.freeze(this)
    }
    
    get volume(){
        return this._quantidade * this._valor;
    }
    get data(){
        return new Date(this._data);
    }
    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }
}