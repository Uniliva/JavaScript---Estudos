class MensagemView extends View{
    constructor(elemento){
        super(elemento);
    }

    template(model){
        return `<div class="alert alert-info">
                MSG: -> ${model.texto}
            </div>
        `
    }

   
}