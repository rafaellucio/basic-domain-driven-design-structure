class ListaNegociacoes {

    constructor() {
        this._listaNegociacoes = [];
    }

    adiciona(negociacao) {
        this._listaNegociacoes.push(negociacao);
    }

    get negociacao() {
        return [].concat(this._listaNegociacoes);
    }
}