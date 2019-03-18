angular.module("app").service("loginService", function ($http, $localStorage) {
    var service = {
        'buscarUsuarios': buscarUsuarios,
        'salvarUsuario': salvarUsuario
    };

    return service;

    function buscarUsuarios() {
        return $http.get('http://localhost:7791/usuario/getUsuarios', {});
    };

    function salvarUsuario(usuario) {
        let metodo = 'postUsuario';
        if (usuario.id_usuario)
            metodo = 'putUsuario';

        usuario.senha = CryptoJS.SHA256('1234').toString(CryptoJS.enc.Hex);
        usuario.id_usuario_alteracao = $localStorage.user.id_usuario;
        return $http.post('http://localhost:7791/usuario/' + metodo, usuario);

    }
});