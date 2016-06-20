class View {

    constructor (element) {
        this.element = element;
    }

    template(model) {
        throw Error('Você deve sobrescrever este método em seu template');
    }

    update(model) {
        this.element.innerHTML = this.template(model);
    }
}