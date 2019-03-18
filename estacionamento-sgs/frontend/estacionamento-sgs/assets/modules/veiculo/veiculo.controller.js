"use strict";
angular.module('app').controller('veiculoController', veiculoController);
veiculoController.$inject = ['veiculoService', '$state'];

function veiculoController(veiculoService, $state) {

    var v = this;
    var msgSucesso = false;
    var msgErro = false;

    v.$onInit = function () {
        v.buscarPatios();
    }

    v.patios = [];

    v.veiculo = {
        'cliente': {
            nome: null,
            cpf: null,
            telefone: null
        },
        'patio': {
            id: null,
            descricao: null,
            qtd_vaga: null,
            taxa_hora: null
        }
    };


    v.salvar = function () {
        console.log(v.veiculo);

        veiculoService.salvarVeiculo(v.veiculo).then(() => {
            v.veiculo = {}
            v.msgSucesso = true;
            setTimeout(function() {
                v.msgSucesso = false;
              
            }, 4000)
    
            console.log("salvou");
        }).catch((error) => {
            v.msgErro = true;
            
            setTimeout(function() {
                v.msgErro = false;
              console.log(v.msgErro);
            }, 4000)
            console.log(error.data.message);
        });

    }

    v.buscarPatios = function () {
        veiculoService.buscarPatios().then((patios) => {
            v.patios = patios.data;
            console.log(v.patios);

        }).catch(() => {});
    }


}