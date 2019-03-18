"use strict";
angular.module('app').controller('estacionamentoController', estacionamentoController);
estacionamentoController.$inject = ['estacionamentoService'];

function estacionamentoController(estacionamentoService) {
    var est = this;

    var msgSucesso = false;
    var msgErro = false;
    est.patio = {};

    est.salvar = function () {
        estacionamentoService.salvarPatio(est.patio).then((retorno) => {
            est.patio = {};
            console.log(retorno.data);

            if (retorno.data != "") {
                est.msgSucesso = true;
            } else {
                est.msgErro = true;
            }
            console.log("sucesso");
        }).catch((error) => {
            est.msgErro = true;

            setTimeout(function () {
                est.msgErro = false;
                console.log(est.msgErro);
            }, 4000)
            console.log("erro");
        });
    }

}