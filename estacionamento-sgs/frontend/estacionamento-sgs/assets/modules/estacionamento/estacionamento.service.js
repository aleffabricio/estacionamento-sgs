angular.module("app").service("estacionamentoService", function ($http) {
    var service = {
        'buscarVagas': buscarVagas,
        'salvarPatio': salvarPatio
    };

    return service;

    function buscarVagas() {
        return $http.get('http://localhost:8080/total/vagas', {});
    };

    function salvarPatio(parametro) {
        let metodo = '/novo/patio';
        
        return $http.post('http://localhost:8080/' + metodo, parametro);

    }
});