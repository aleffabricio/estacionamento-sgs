"use strict";
angular.module('app').controller('dashboardController', dashboardController);
dashboardController.$inject = ['estacionamentoService'];

function dashboardController(estacionamentoService) {
    var est = this;

    est.vagas = {};

    est.$onInit = function () {
        est.buscarVagas();
    }

    est.buscarVagas = function () {
        estacionamentoService.buscarVagas().then((vagas) =>{
            console.log(vagas.data);
            
            est.vagas = vagas.data;

        }).catch(() =>{});
    }


   
}