class View{
    constructor(elemento){
        this._elemento=elemento;
    }
    template(listaNegociacao){
        throw new Error("Esse template deve ser implementado na classe filha!");
    }
    update(model){
        this._elemento.innerHTML=this.template(model)

    }
}