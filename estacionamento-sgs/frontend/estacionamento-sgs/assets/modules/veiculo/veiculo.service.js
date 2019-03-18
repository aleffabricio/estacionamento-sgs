angular.module("app").service("veiculoService", function ($http) {
    var service = {
        'buscarPatios': buscarPatios,
        'salvarVeiculo': salvarVeiculo
    };

    return service;

    function buscarPatios() {
        return $http.get('http://localhost:8080/listar/patios', {});
    };

    function salvarVeiculo(parametro) {
        let metodo = '/novo/veiculo';
        
        return $http.post('http://localhost:8080/' + metodo, parametro);

    }
});