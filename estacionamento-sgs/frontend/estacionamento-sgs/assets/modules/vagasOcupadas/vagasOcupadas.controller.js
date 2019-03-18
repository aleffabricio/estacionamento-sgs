"use strict";
angular.module('app').controller('vagasOcupadasController', vagasOcupadasController);
vagasOcupadasController.$inject = ['vagasOcupadasService'];

function vagasOcupadasController(vagasOcupadasService) {

    var v = this;

    v.$onInit = function () {
        v.buscarVeiculos();
    }

    v.veiculos = [];

    v.buscarVeiculos = function () {
        vagasOcupadasService.buscarVeiculos().then((veiculos) => {
            v.veiculos = veiculos.data;
            // console.log(veiculos.data);
        }).catch(() => {});
    }

    v.salvar = function (parametro) {
        console.log("entrou");
        console.log(parametro);

        vagasOcupadasService.salvar(parametro).then(() =>{
            v.buscarVeiculos();
        }).catch(()=>{});
    }
}