class MensagemView extends View {
    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        if (model.texto != "") {
            return `<div class="alert alert-info">
                MSG: -> ${model.texto}
            </div>
        `
        }
        return "";
    }


}