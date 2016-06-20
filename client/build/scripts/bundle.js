"use strict";

var negociacaoController = new NegociacaoController();
"use strict";

var negociacaoController = new NegociacaoController();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NegociacaoController = function () {
    function NegociacaoController() {
        _classCallCheck(this, NegociacaoController);

        var $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }

    _createClass(NegociacaoController, [{
        key: 'adiciona',
        value: function adiciona(event) {
            event.preventDefault();

            this._listaNegociacoes.adiciona(this._criaNegociacao());
            this._negociacoesView.update(this._listaNegociacoes);

            this._mensagem.text = 'Negociacão adicionada com sucesso!';
            this._mensagemView.update(this._mensagem);

            this._limpaFormulario();
        }
    }, {
        key: '_criaNegociacao',
        value: function _criaNegociacao() {
            return new Negociacao(DateHelper.textToDate(this._inputData.value), this._inputQuantidade.value, this._inputValor.value);
        }
    }, {
        key: '_limpaFormulario',
        value: function _limpaFormulario() {
            this._inputData.value = '';
            this._inputData.focus();
            this._inputQuantidade.value = 1;
            this._inputValor.value = 0.0;
        }
    }]);

    return NegociacaoController;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListaNegociacoes = function () {
    function ListaNegociacoes() {
        _classCallCheck(this, ListaNegociacoes);

        this._listaNegociacoes = [];
    }

    _createClass(ListaNegociacoes, [{
        key: "adiciona",
        value: function adiciona(negociacao) {
            this._listaNegociacoes.push(negociacao);
        }
    }, {
        key: "negociacao",
        get: function get() {
            return [].concat(this._listaNegociacoes);
        }
    }]);

    return ListaNegociacoes;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mensagem = function () {
    function Mensagem() {
        var text = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

        _classCallCheck(this, Mensagem);

        this._text = text;
    }

    _createClass(Mensagem, [{
        key: 'text',
        get: function get() {
            return this._text;
        },
        set: function set(text) {
            this._text = text;
        }
    }]);

    return Mensagem;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Negociacao = function () {
    function Negociacao(data, quantidade, valor) {
        _classCallCheck(this, Negociacao);

        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        Object.freeze(this);
    }

    _createClass(Negociacao, [{
        key: "volume",
        get: function get() {
            return this._quantidade * this._valor;
        }
    }, {
        key: "data",
        get: function get() {
            return this._data;
        }
    }, {
        key: "quantidade",
        get: function get() {
            return this._quantidade;
        }
    }, {
        key: "valor",
        get: function get() {
            return this._valor;
        }
    }]);

    return Negociacao;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateHelper = function () {
    function DateHelper() {
        _classCallCheck(this, DateHelper);

        throw new Error('Essa class não pode ser instanciada.');
    }

    _createClass(DateHelper, null, [{
        key: 'dateToText',
        value: function dateToText(date) {
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        }
    }, {
        key: 'textToDate',
        value: function textToDate(text) {

            if (!/\d{4}-\d{2}-\d{2}/.test(text)) throw new Error('Date should be yyyy-mm-dd');

            return new (Function.prototype.bind.apply(Date, [null].concat(_toConsumableArray(text.split('-').map(function (item, index) {
                return item - index % 2;
            })))))();
        }
    }]);

    return DateHelper;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MensagemView = function (_View) {
    _inherits(MensagemView, _View);

    function MensagemView(element) {
        _classCallCheck(this, MensagemView);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MensagemView).call(this, element));
    }

    _createClass(MensagemView, [{
        key: 'template',
        value: function template(model) {
            return model.text ? '<p class="alert alert-info">' + model.text + '</p>' : '<p></p>';
        }
    }]);

    return MensagemView;
}(View);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NegociacoesView = function (_View) {
    _inherits(NegociacoesView, _View);

    function NegociacoesView(element) {
        _classCallCheck(this, NegociacoesView);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(NegociacoesView).call(this, element));
    }

    _createClass(NegociacoesView, [{
        key: 'template',
        value: function template(model) {
            return '\n            <table class="table table-hover table-bordered">\n                <thead>\n                    <tr>\n                        <th>DATA</th>\n                        <th>QUANTIDADE</th>\n                        <th>VALOR</th>\n                        <th>VOLUME</th>\n                    </tr>\n                </thead>\n                \n                <tbody>\n                    ' + model.negociacao.map(function (negociacao) {
                return '\n                                <tr>\n                                    <td>' + DateHelper.dateToText(negociacao.data) + '</td>\n                                    <td>' + negociacao.quantidade + '</td>\n                                    <td>' + negociacao.valor + '</td>\n                                    <td>' + negociacao.volume + '</td>\n                                </tr>\n                            ';
            }).join('') + '\n                </tbody>\n\n                <tfoot>\n                    <tr>\n                        <td colspan="3"></td>\n                        <td>\n                            ' + model.negociacao.reduce(function (total, negociacao) {
                return total += negociacao.volume;
            }, 0.0) + '\n                        </td>\n                    </tr>\n                </tfoot>\n            </table>\n        ';
        }
    }]);

    return NegociacoesView;
}(View);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
    function View(element) {
        _classCallCheck(this, View);

        this.element = element;
    }

    _createClass(View, [{
        key: 'template',
        value: function template(model) {
            throw Error('Você deve sobrescrever este método em seu template');
        }
    }, {
        key: 'update',
        value: function update(model) {
            this.element.innerHTML = this.template(model);
        }
    }]);

    return View;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NegociacaoController = function () {
    function NegociacaoController() {
        _classCallCheck(this, NegociacaoController);

        var $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }

    _createClass(NegociacaoController, [{
        key: 'adiciona',
        value: function adiciona(event) {
            event.preventDefault();

            this._listaNegociacoes.adiciona(this._criaNegociacao());
            this._negociacoesView.update(this._listaNegociacoes);

            this._mensagem.text = 'Negociacão adicionada com sucesso!';
            this._mensagemView.update(this._mensagem);

            this._limpaFormulario();
        }
    }, {
        key: '_criaNegociacao',
        value: function _criaNegociacao() {
            return new Negociacao(DateHelper.textToDate(this._inputData.value), this._inputQuantidade.value, this._inputValor.value);
        }
    }, {
        key: '_limpaFormulario',
        value: function _limpaFormulario() {
            this._inputData.value = '';
            this._inputData.focus();
            this._inputQuantidade.value = 1;
            this._inputValor.value = 0.0;
        }
    }]);

    return NegociacaoController;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListaNegociacoes = function () {
    function ListaNegociacoes() {
        _classCallCheck(this, ListaNegociacoes);

        this._listaNegociacoes = [];
    }

    _createClass(ListaNegociacoes, [{
        key: "adiciona",
        value: function adiciona(negociacao) {
            this._listaNegociacoes.push(negociacao);
        }
    }, {
        key: "negociacao",
        get: function get() {
            return [].concat(this._listaNegociacoes);
        }
    }]);

    return ListaNegociacoes;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mensagem = function () {
    function Mensagem() {
        var text = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

        _classCallCheck(this, Mensagem);

        this._text = text;
    }

    _createClass(Mensagem, [{
        key: 'text',
        get: function get() {
            return this._text;
        },
        set: function set(text) {
            this._text = text;
        }
    }]);

    return Mensagem;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Negociacao = function () {
    function Negociacao(data, quantidade, valor) {
        _classCallCheck(this, Negociacao);

        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        Object.freeze(this);
    }

    _createClass(Negociacao, [{
        key: "volume",
        get: function get() {
            return this._quantidade * this._valor;
        }
    }, {
        key: "data",
        get: function get() {
            return this._data;
        }
    }, {
        key: "quantidade",
        get: function get() {
            return this._quantidade;
        }
    }, {
        key: "valor",
        get: function get() {
            return this._valor;
        }
    }]);

    return Negociacao;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateHelper = function () {
    function DateHelper() {
        _classCallCheck(this, DateHelper);

        throw new Error('Essa class não pode ser instanciada.');
    }

    _createClass(DateHelper, null, [{
        key: 'dateToText',
        value: function dateToText(date) {
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        }
    }, {
        key: 'textToDate',
        value: function textToDate(text) {

            if (!/\d{4}-\d{2}-\d{2}/.test(text)) throw new Error('Date should be yyyy-mm-dd');

            return new (Function.prototype.bind.apply(Date, [null].concat(_toConsumableArray(text.split('-').map(function (item, index) {
                return item - index % 2;
            })))))();
        }
    }]);

    return DateHelper;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MensagemView = function (_View) {
    _inherits(MensagemView, _View);

    function MensagemView(element) {
        _classCallCheck(this, MensagemView);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MensagemView).call(this, element));
    }

    _createClass(MensagemView, [{
        key: 'template',
        value: function template(model) {
            return model.text ? '<p class="alert alert-info">' + model.text + '</p>' : '<p></p>';
        }
    }]);

    return MensagemView;
}(View);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NegociacoesView = function (_View) {
    _inherits(NegociacoesView, _View);

    function NegociacoesView(element) {
        _classCallCheck(this, NegociacoesView);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(NegociacoesView).call(this, element));
    }

    _createClass(NegociacoesView, [{
        key: 'template',
        value: function template(model) {
            return '\n            <table class="table table-hover table-bordered">\n                <thead>\n                    <tr>\n                        <th>DATA</th>\n                        <th>QUANTIDADE</th>\n                        <th>VALOR</th>\n                        <th>VOLUME</th>\n                    </tr>\n                </thead>\n                \n                <tbody>\n                    ' + model.negociacao.map(function (negociacao) {
                return '\n                                <tr>\n                                    <td>' + DateHelper.dateToText(negociacao.data) + '</td>\n                                    <td>' + negociacao.quantidade + '</td>\n                                    <td>' + negociacao.valor + '</td>\n                                    <td>' + negociacao.volume + '</td>\n                                </tr>\n                            ';
            }).join('') + '\n                </tbody>\n\n                <tfoot>\n                    <tr>\n                        <td colspan="3"></td>\n                        <td>\n                            ' + model.negociacao.reduce(function (total, negociacao) {
                return total += negociacao.volume;
            }, 0.0) + '\n                        </td>\n                    </tr>\n                </tfoot>\n            </table>\n        ';
        }
    }]);

    return NegociacoesView;
}(View);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
    function View(element) {
        _classCallCheck(this, View);

        this.element = element;
    }

    _createClass(View, [{
        key: 'template',
        value: function template(model) {
            throw Error('Você deve sobrescrever este método em seu template');
        }
    }, {
        key: 'update',
        value: function update(model) {
            this.element.innerHTML = this.template(model);
        }
    }]);

    return View;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RzL2luZGV4LnNwZWMuanMiLCJ3d3dyb290L2luZGV4LmpzIiwidGVzdHMvYXBwbGljYXRpb24vY29udHJvbGxlcnMvTmVnb2NpYWNhb0NvbnRyb2xsZXIuc3BlYy5qcyIsInRlc3RzL2RvbWFpbi9lbnRpdHkvTGlzdGFOZWdvY2lhY29lcy5zcGVjLmpzIiwidGVzdHMvZG9tYWluL2VudGl0eS9NZW5zYWdlbS5zcGVjLmpzIiwidGVzdHMvZG9tYWluL2VudGl0eS9OZWdvY2lhY2FvLnNwZWMuanMiLCJ0ZXN0cy9pbmZyYXN0cnVjdHVyZS9oZWxwZXJzL0RhdGVIZWxwZXIuc3BlYy5qcyIsInRlc3RzL3ByZXNlbnRhdGlvbi92aWV3cy9NZW5zYWdlbVZpZXcuc3BlYy5qcyIsInRlc3RzL3ByZXNlbnRhdGlvbi92aWV3cy9OZWdvY2lhY29lc1ZpZXcuc3BlYy5qcyIsInRlc3RzL3ByZXNlbnRhdGlvbi92aWV3cy9WaWV3LnNwZWMuanMiLCJ3d3dyb290L2FwcGxpY2F0aW9uL2NvbnRyb2xsZXJzL05lZ29jaWFjYW9Db250cm9sbGVyLmpzIiwid3d3cm9vdC9kb21haW4vZW50aXR5L0xpc3RhTmVnb2NpYWNvZXMuanMiLCJ3d3dyb290L2RvbWFpbi9lbnRpdHkvTWVuc2FnZW0uanMiLCJ3d3dyb290L2RvbWFpbi9lbnRpdHkvTmVnb2NpYWNhby5qcyIsInd3d3Jvb3QvaW5mcmFzdHJ1Y3R1cmUvaGVscGVycy9EYXRlSGVscGVyLmpzIiwid3d3cm9vdC9wcmVzZW50YXRpb24vdmlld3MvTWVuc2FnZW1WaWV3LmpzIiwid3d3cm9vdC9wcmVzZW50YXRpb24vdmlld3MvTmVnb2NpYWNvZXNWaWV3LmpzIiwid3d3cm9vdC9wcmVzZW50YXRpb24vdmlld3MvVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQUksdUJBQXVCLElBQUksb0JBQUosRUFBM0I7OztBQ0FBLElBQUksdUJBQXVCLElBQUksb0JBQUosRUFBM0I7Ozs7Ozs7SUNG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RUFTRyxJQVRILENBU1EsRUFUUixDQWJoQixrTUE4QnNCLE1BQU0sVUFBTixDQUFpQixNQUFqQixDQUF3QixVQUFDLEtBQUQsRUFBUSxVQUFSO0FBQUEsdUJBQXVCLFNBQVMsV0FBVyxNQUEzQztBQUFBLGFBQXhCLEVBQTJFLEdBQTNFLENBOUJ0QjtBQW9DSDs7OztFQTNDeUI7Ozs7Ozs7SUNBeEI7QUFFRixrQkFBYSxPQUFiLEVBQXNCO0FBQUE7O0FBQ2xCLGFBQUssT0FBTCxHQUFlLE9BQWY7QUFDSDs7OztpQ0FFUSxPQUFPO0FBQ1osa0JBQU0sTUFBTSxvREFBTixDQUFOO0FBQ0g7OzsrQkFFTSxPQUFPO0FBQ1YsaUJBQUssT0FBTCxDQUFhLFNBQWIsR0FBeUIsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUF6QjtBQUNIIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxubGV0IG5lZ29jaWFjYW9Db250cm9sbGVyID0gbmV3IE5lZ29jaWFjYW9Db250cm9sbGVyKCk7IiwiXHJcblxyXG5sZXQgbmVnb2NpYWNhb0NvbnRyb2xsZXIgPSBuZXcgTmVnb2NpYWNhb0NvbnRyb2xsZXIoKTsiLCJjbGFzcyBOZWdvY2lhY2FvQ29udHJvbGxlciB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICBsZXQgJCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IuYmluZChkb2N1bWVudCk7XHJcbiAgICBcclxuICAgICAgICB0aGlzLl9pbnB1dERhdGEgPSAkKCcjZGF0YScpO1xyXG4gICAgICAgIHRoaXMuX2lucHV0UXVhbnRpZGFkZSA9ICQoJyNxdWFudGlkYWRlJyk7XHJcbiAgICAgICAgdGhpcy5faW5wdXRWYWxvciA9ICQoJyN2YWxvcicpO1xyXG4gICAgICAgIHRoaXMuX2xpc3RhTmVnb2NpYWNvZXMgPSBuZXcgTGlzdGFOZWdvY2lhY29lcygpO1xyXG4gICAgICAgIHRoaXMuX25lZ29jaWFjb2VzVmlldyA9IG5ldyBOZWdvY2lhY29lc1ZpZXcoJCgnI25lZ29jaWFjb2VzVmlldycpKTtcclxuICAgICAgICB0aGlzLl9uZWdvY2lhY29lc1ZpZXcudXBkYXRlKHRoaXMuX2xpc3RhTmVnb2NpYWNvZXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9tZW5zYWdlbSA9IG5ldyBNZW5zYWdlbSgpO1xyXG4gICAgICAgIHRoaXMuX21lbnNhZ2VtVmlldyA9IG5ldyBNZW5zYWdlbVZpZXcoJCgnI21lbnNhZ2VtVmlldycpKTtcclxuICAgICAgICB0aGlzLl9tZW5zYWdlbVZpZXcudXBkYXRlKHRoaXMuX21lbnNhZ2VtKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYWRpY2lvbmEoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB0aGlzLl9saXN0YU5lZ29jaWFjb2VzLmFkaWNpb25hKHRoaXMuX2NyaWFOZWdvY2lhY2FvKCkpO1xyXG4gICAgICAgIHRoaXMuX25lZ29jaWFjb2VzVmlldy51cGRhdGUodGhpcy5fbGlzdGFOZWdvY2lhY29lcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fbWVuc2FnZW0udGV4dCA9ICdOZWdvY2lhY8OjbyBhZGljaW9uYWRhIGNvbSBzdWNlc3NvISc7XHJcbiAgICAgICAgdGhpcy5fbWVuc2FnZW1WaWV3LnVwZGF0ZSh0aGlzLl9tZW5zYWdlbSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fbGltcGFGb3JtdWxhcmlvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NyaWFOZWdvY2lhY2FvKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTmVnb2NpYWNhbyhcclxuICAgICAgICAgICAgRGF0ZUhlbHBlci50ZXh0VG9EYXRlKHRoaXMuX2lucHV0RGF0YS52YWx1ZSksXHJcbiAgICAgICAgICAgIHRoaXMuX2lucHV0UXVhbnRpZGFkZS52YWx1ZSxcclxuICAgICAgICAgICAgdGhpcy5faW5wdXRWYWxvci52YWx1ZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX2xpbXBhRm9ybXVsYXJpbygpIHtcclxuICAgICAgICB0aGlzLl9pbnB1dERhdGEudmFsdWUgPSAnJztcclxuICAgICAgICB0aGlzLl9pbnB1dERhdGEuZm9jdXMoKTtcclxuICAgICAgICB0aGlzLl9pbnB1dFF1YW50aWRhZGUudmFsdWUgPSAxO1xyXG4gICAgICAgIHRoaXMuX2lucHV0VmFsb3IudmFsdWUgPSAwLjA7XHJcbiAgICB9XHJcbn0iLCJjbGFzcyBMaXN0YU5lZ29jaWFjb2VzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9saXN0YU5lZ29jaWFjb2VzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRpY2lvbmEobmVnb2NpYWNhbykge1xyXG4gICAgICAgIHRoaXMuX2xpc3RhTmVnb2NpYWNvZXMucHVzaChuZWdvY2lhY2FvKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbmVnb2NpYWNhbygpIHtcclxuICAgICAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuX2xpc3RhTmVnb2NpYWNvZXMpO1xyXG4gICAgfVxyXG59IiwiY2xhc3MgTWVuc2FnZW0ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRleHQgPSAnJykge1xyXG4gICAgICAgIHRoaXMuX3RleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0ZXh0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB0ZXh0KHRleHQpIHtcclxuICAgICAgICB0aGlzLl90ZXh0ID0gdGV4dDtcclxuICAgIH1cclxufSIsImNsYXNzIE5lZ29jaWFjYW8ge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhLCBxdWFudGlkYWRlLCB2YWxvcikge1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSBuZXcgRGF0ZShkYXRhLmdldFRpbWUoKSk7XHJcbiAgICAgICAgdGhpcy5fcXVhbnRpZGFkZSA9IHF1YW50aWRhZGU7XHJcbiAgICAgICAgdGhpcy5fdmFsb3IgPSB2YWxvcjtcclxuICAgICAgICBcclxuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgdm9sdW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xdWFudGlkYWRlICogdGhpcy5fdmFsb3I7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgcXVhbnRpZGFkZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcXVhbnRpZGFkZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHZhbG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWxvcjtcclxuICAgIH1cclxuICAgIFxyXG59IiwiY2xhc3MgRGF0ZUhlbHBlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFc3NhIGNsYXNzIG7Do28gcG9kZSBzZXIgaW5zdGFuY2lhZGEuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRhdGVUb1RleHQoZGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBgJHtkYXRlLmdldERhdGUoKX0vJHtkYXRlLmdldE1vbnRoKCkrMX0vJHtkYXRlLmdldEZ1bGxZZWFyKCl9YDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdGV4dFRvRGF0ZSh0ZXh0KSB7XHJcblxyXG4gICAgICAgIGlmKCEvXFxkezR9LVxcZHsyfS1cXGR7Mn0vLnRlc3QodGV4dCkpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGF0ZSBzaG91bGQgYmUgeXl5eS1tbS1kZCcpO1xyXG5cclxuICAgICAgICByZXR1cm4gIG5ldyBEYXRlKC4uLnRleHQuc3BsaXQoJy0nKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiBpdGVtIC0gaW5kZXggJSAyKSlcclxuICAgIH1cclxuXHJcbn0iLCJjbGFzcyBNZW5zYWdlbVZpZXcgZXh0ZW5kcyBWaWV3IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGVtcGxhdGUobW9kZWwpIHtcclxuICAgICAgICByZXR1cm4gbW9kZWwudGV4dCA/IGA8cCBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIj4ke21vZGVsLnRleHR9PC9wPmAgOiAnPHA+PC9wPic7XHJcbiAgICB9XHJcbn0iLCJjbGFzcyBOZWdvY2lhY29lc1ZpZXcgZXh0ZW5kcyBWaWV3IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGVtcGxhdGUobW9kZWwpIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1ib3JkZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRBVEE8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UVVBTlRJREFERTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5WQUxPUjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5WT0xVTUU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwubmVnb2NpYWNhby5tYXAobmVnb2NpYWNhbyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7RGF0ZUhlbHBlci5kYXRlVG9UZXh0KG5lZ29jaWFjYW8uZGF0YSl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7bmVnb2NpYWNhby5xdWFudGlkYWRlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke25lZ29jaWFjYW8udmFsb3J9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7bmVnb2NpYWNhby52b2x1bWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5qb2luKCcnKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRmb290PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIzXCI+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHttb2RlbC5uZWdvY2lhY2FvLnJlZHVjZSgodG90YWwsIG5lZ29jaWFjYW8pID0+IHRvdGFsICs9IG5lZ29jaWFjYW8udm9sdW1lLCAwLjApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rmb290PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcbn0iLCJjbGFzcyBWaWV3IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGVtcGxhdGUobW9kZWwpIHtcclxuICAgICAgICB0aHJvdyBFcnJvcignVm9jw6ogZGV2ZSBzb2JyZXNjcmV2ZXIgZXN0ZSBtw6l0b2RvIGVtIHNldSB0ZW1wbGF0ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShtb2RlbCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnRlbXBsYXRlKG1vZGVsKTtcclxuICAgIH1cclxufSIsImNsYXNzIE5lZ29jaWFjYW9Db250cm9sbGVyIHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIGxldCAkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvci5iaW5kKGRvY3VtZW50KTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMuX2lucHV0RGF0YSA9ICQoJyNkYXRhJyk7XHJcbiAgICAgICAgdGhpcy5faW5wdXRRdWFudGlkYWRlID0gJCgnI3F1YW50aWRhZGUnKTtcclxuICAgICAgICB0aGlzLl9pbnB1dFZhbG9yID0gJCgnI3ZhbG9yJyk7XHJcbiAgICAgICAgdGhpcy5fbGlzdGFOZWdvY2lhY29lcyA9IG5ldyBMaXN0YU5lZ29jaWFjb2VzKCk7XHJcbiAgICAgICAgdGhpcy5fbmVnb2NpYWNvZXNWaWV3ID0gbmV3IE5lZ29jaWFjb2VzVmlldygkKCcjbmVnb2NpYWNvZXNWaWV3JykpO1xyXG4gICAgICAgIHRoaXMuX25lZ29jaWFjb2VzVmlldy51cGRhdGUodGhpcy5fbGlzdGFOZWdvY2lhY29lcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX21lbnNhZ2VtID0gbmV3IE1lbnNhZ2VtKCk7XHJcbiAgICAgICAgdGhpcy5fbWVuc2FnZW1WaWV3ID0gbmV3IE1lbnNhZ2VtVmlldygkKCcjbWVuc2FnZW1WaWV3JykpO1xyXG4gICAgICAgIHRoaXMuX21lbnNhZ2VtVmlldy51cGRhdGUodGhpcy5fbWVuc2FnZW0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhZGljaW9uYShldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2xpc3RhTmVnb2NpYWNvZXMuYWRpY2lvbmEodGhpcy5fY3JpYU5lZ29jaWFjYW8oKSk7XHJcbiAgICAgICAgdGhpcy5fbmVnb2NpYWNvZXNWaWV3LnVwZGF0ZSh0aGlzLl9saXN0YU5lZ29jaWFjb2VzKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9tZW5zYWdlbS50ZXh0ID0gJ05lZ29jaWFjw6NvIGFkaWNpb25hZGEgY29tIHN1Y2Vzc28hJztcclxuICAgICAgICB0aGlzLl9tZW5zYWdlbVZpZXcudXBkYXRlKHRoaXMuX21lbnNhZ2VtKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9saW1wYUZvcm11bGFyaW8oKTtcclxuICAgIH1cclxuXHJcbiAgICBfY3JpYU5lZ29jaWFjYW8oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOZWdvY2lhY2FvKFxyXG4gICAgICAgICAgICBEYXRlSGVscGVyLnRleHRUb0RhdGUodGhpcy5faW5wdXREYXRhLnZhbHVlKSxcclxuICAgICAgICAgICAgdGhpcy5faW5wdXRRdWFudGlkYWRlLnZhbHVlLFxyXG4gICAgICAgICAgICB0aGlzLl9pbnB1dFZhbG9yLnZhbHVlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfbGltcGFGb3JtdWxhcmlvKCkge1xyXG4gICAgICAgIHRoaXMuX2lucHV0RGF0YS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuX2lucHV0RGF0YS5mb2N1cygpO1xyXG4gICAgICAgIHRoaXMuX2lucHV0UXVhbnRpZGFkZS52YWx1ZSA9IDE7XHJcbiAgICAgICAgdGhpcy5faW5wdXRWYWxvci52YWx1ZSA9IDAuMDtcclxuICAgIH1cclxufSIsImNsYXNzIExpc3RhTmVnb2NpYWNvZXMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2xpc3RhTmVnb2NpYWNvZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGljaW9uYShuZWdvY2lhY2FvKSB7XHJcbiAgICAgICAgdGhpcy5fbGlzdGFOZWdvY2lhY29lcy5wdXNoKG5lZ29jaWFjYW8pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBuZWdvY2lhY2FvKCkge1xyXG4gICAgICAgIHJldHVybiBbXS5jb25jYXQodGhpcy5fbGlzdGFOZWdvY2lhY29lcyk7XHJcbiAgICB9XHJcbn0iLCJjbGFzcyBNZW5zYWdlbSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGV4dCA9ICcnKSB7XHJcbiAgICAgICAgdGhpcy5fdGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRleHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHRleHQodGV4dCkge1xyXG4gICAgICAgIHRoaXMuX3RleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG59IiwiY2xhc3MgTmVnb2NpYWNhbyB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEsIHF1YW50aWRhZGUsIHZhbG9yKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IG5ldyBEYXRlKGRhdGEuZ2V0VGltZSgpKTtcclxuICAgICAgICB0aGlzLl9xdWFudGlkYWRlID0gcXVhbnRpZGFkZTtcclxuICAgICAgICB0aGlzLl92YWxvciA9IHZhbG9yO1xyXG4gICAgICAgIFxyXG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCB2b2x1bWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1YW50aWRhZGUgKiB0aGlzLl92YWxvcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBxdWFudGlkYWRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xdWFudGlkYWRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgdmFsb3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbG9yO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iLCJjbGFzcyBEYXRlSGVscGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vzc2EgY2xhc3MgbsOjbyBwb2RlIHNlciBpbnN0YW5jaWFkYS4nKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGF0ZVRvVGV4dChkYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke2RhdGUuZ2V0RGF0ZSgpfS8ke2RhdGUuZ2V0TW9udGgoKSsxfS8ke2RhdGUuZ2V0RnVsbFllYXIoKX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0ZXh0VG9EYXRlKHRleHQpIHtcclxuXHJcbiAgICAgICAgaWYoIS9cXGR7NH0tXFxkezJ9LVxcZHsyfS8udGVzdCh0ZXh0KSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEYXRlIHNob3VsZCBiZSB5eXl5LW1tLWRkJyk7XHJcblxyXG4gICAgICAgIHJldHVybiAgbmV3IERhdGUoLi4udGV4dC5zcGxpdCgnLScpLm1hcCgoaXRlbSwgaW5kZXgpID0+IGl0ZW0gLSBpbmRleCAlIDIpKVxyXG4gICAgfVxyXG5cclxufSIsImNsYXNzIE1lbnNhZ2VtVmlldyBleHRlbmRzIFZpZXcge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcclxuICAgICAgICBzdXBlcihlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICB0ZW1wbGF0ZShtb2RlbCkge1xyXG4gICAgICAgIHJldHVybiBtb2RlbC50ZXh0ID8gYDxwIGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiPiR7bW9kZWwudGV4dH08L3A+YCA6ICc8cD48L3A+JztcclxuICAgIH1cclxufSIsImNsYXNzIE5lZ29jaWFjb2VzVmlldyBleHRlbmRzIFZpZXcge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcclxuICAgICAgICBzdXBlcihlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICB0ZW1wbGF0ZShtb2RlbCkge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlLWJvcmRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+REFUQTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5RVUFOVElEQURFPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlZBTE9SPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlZPTFVNRTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5uZWdvY2lhY2FvLm1hcChuZWdvY2lhY2FvID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtEYXRlSGVscGVyLmRhdGVUb1RleHQobmVnb2NpYWNhby5kYXRhKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtuZWdvY2lhY2FvLnF1YW50aWRhZGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7bmVnb2NpYWNhby52YWxvcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtuZWdvY2lhY2FvLnZvbHVtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmpvaW4oJycpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGZvb3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjNcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke21vZGVsLm5lZ29jaWFjYW8ucmVkdWNlKCh0b3RhbCwgbmVnb2NpYWNhbykgPT4gdG90YWwgKz0gbmVnb2NpYWNhby52b2x1bWUsIDAuMCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGZvb3Q+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgYDtcclxuICAgIH1cclxufSIsImNsYXNzIFZpZXcge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICB0ZW1wbGF0ZShtb2RlbCkge1xyXG4gICAgICAgIHRocm93IEVycm9yKCdWb2PDqiBkZXZlIHNvYnJlc2NyZXZlciBlc3RlIG3DqXRvZG8gZW0gc2V1IHRlbXBsYXRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKG1vZGVsKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IHRoaXMudGVtcGxhdGUobW9kZWwpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
