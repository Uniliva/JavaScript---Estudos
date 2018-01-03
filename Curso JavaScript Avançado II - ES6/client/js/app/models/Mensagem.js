class Mensagem {
    constructor(msg=""){
        this._texto=msg;
        
    }
    get texto(){
        return this._texto;
    }
    
    set texto(nmsg){
        this._texto=nmsg;
    }
}