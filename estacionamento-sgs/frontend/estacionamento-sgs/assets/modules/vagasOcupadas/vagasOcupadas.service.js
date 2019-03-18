angular.module("app").service("vagasOcupadasService", function ($http) {
    var service = {
        'buscarVeiculos': buscarVeiculos,
        'salvar': salvar
    };

    return service;

    function buscarVeiculos() {
        return $http.get('http://localhost:8080/listar/veiculos', {});
    };

    function salvar(parametro) {
        let metodo = '/estacionamento';
        
        return $http.post('http://localhost:8080/' + metodo, parametro);

    }
});