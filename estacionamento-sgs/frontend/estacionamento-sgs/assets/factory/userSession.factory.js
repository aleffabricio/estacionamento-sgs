"use strict";
angular.module('app').factory('userSessionFactory', function ($localStorage) {

    this.create = function (user, permissoes) {
       // $cookies.put('user', user.usuario);
        $localStorage.permissoes = true;
        delete user['senha'];
        $localStorage.user = user;
    };

    this.getUser = function () {
        return $cookies.get('user');
    };

    this.getPermissoes = function () {
        return angular.fromJson($localStorage.permissoes);
    };

    this.destroy = function () {
        $cookies.remove('token');
        $cookies.remove('user');
        delete $localStorage.permissoes;
    };

    return this;
});