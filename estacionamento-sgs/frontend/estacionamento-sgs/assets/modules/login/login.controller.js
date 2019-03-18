"use strict";
angular.module('app').controller('loginController', loginController);
loginController.$inject = ['loginService', '$state', 'userSessionFactory', '$localStorage'];

function loginController(loginService, $state, userSessionFactory, $localStorage) {
    var vm = this;

    vm.objTela = { 'usuario': undefined, 'senha': undefined };

    vm.logar = function () {
        if (vm.objTela.usuario == 'admin' && vm.objTela.senha == 1234) {
            userSessionFactory.create(vm.objTela, vm.objTela);
            return $state.go('home.dashboard');
        } else {
            alert('Usuário não encontrado!');
        };
    };
}