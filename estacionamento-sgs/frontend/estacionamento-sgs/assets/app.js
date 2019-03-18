var app = angular.module('app', [
    'ui.router',
    'oc.lazyLoad',
    'ngStorage',
    'ui.utils.masks',
]);

app.config(function ($stateProvider, $urlRouterProvider) {

    /*  $urlRouterProvider.otherwise(function ($injector) {
          var $state = $injector.get("$state");
          $state.go("login");
      });*/

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'assets/modules/login/login.html',
            controller: 'loginController',
            controllerAs: 'login',
            resolve: {
                loadMyFiles: ['$ocLazyLoad', function ($ocLazyLoad) {

                    return $ocLazyLoad.load({
                        name: 'itecSuite',
                        files: [
                            'assets/modules/login/login.service.js',
                            'assets/modules/login/login.controller.js'
                        ],
                        cache: false
                    });
                }]
            }
        })
        .state('home', {
            url: '/home',
            templateUrl: 'assets/modules/home/home.html',
            controller: 'homeController',
            controllerAs: 'home',
            resolve: {
                loadMyFiles: ['$ocLazyLoad', function ($ocLazyLoad) {

                    return $ocLazyLoad.load({
                        name: 'itecSuite',
                        files: [

                            'assets/modules/home/home.controller.js'
                        ],
                        cache: false
                    });
                }]
            }
        })
        .state('home.estacionamento', {
            url: '/estacionamento',
            data: {
                pageTitle: 'Cadastrar Estacionamento'
            },
            templateUrl: 'assets/modules/estacionamento/estacionamento.html',
            controller: 'estacionamentoController',
            controllerAs: 'estacionamento',
            resolve: {
                loadMyFiles: ['$ocLazyLoad', function ($ocLazyLoad) {

                    return $ocLazyLoad.load({
                        name: 'itecSuite',
                        files: [
                            'assets/modules/estacionamento/estacionamento.service.js',
                            'assets/modules/estacionamento/estacionamento.controller.js'
                        ],
                        cache: false
                    });
                }]
            }
        })
        .state('home.dashboard', {
            url: '/dashboard',
            data: {
                pageTitle: 'Dashboard'
            },

            templateUrl: 'assets/modules/dashboard/dashboard.html',
            controller: 'dashboardController',
            controllerAs: 'dashboard',
            resolve: {
                loadMyFiles: ['$ocLazyLoad', function ($ocLazyLoad) {

                    return $ocLazyLoad.load({
                        name: 'itecSuite',
                        files: [
                            'assets/modules/estacionamento/estacionamento.service.js',
                            'assets/modules/dashboard/dashboard.controller.js'
                        ],
                        cache: false
                    });
                }]
            }
        })
        .state('home.veiculo', {
            url: '/veiculo',
            data: {
                pageTitle: 'Cadastrar veiculo'
            },
            templateUrl: 'assets/modules/veiculo/veiculo.html',
            controller: 'veiculoController',
            controllerAs: 'veiculo',
            resolve: {
                loadMyFiles: ['$ocLazyLoad', function ($ocLazyLoad) {

                    return $ocLazyLoad.load({
                        name: 'itecSuite',
                        files: [
                            'assets/modules/veiculo/veiculo.service.js',
                            'assets/modules/veiculo/veiculo.controller.js'
                        ],
                        cache: false
                    });
                }]
            }
        })
        .state('home.vagasOcupadas', {
            url: '/vagasOcupadas',
            data: {
                pageTitle: 'Cadastrar vagasOcupadas'
            },
            templateUrl: 'assets/modules/vagasOcupadas/vagasOcupadas.html',
            controller: 'vagasOcupadasController',
            controllerAs: 'vagasOcupadas',
            resolve: {
                loadMyFiles: ['$ocLazyLoad', function ($ocLazyLoad) {

                    return $ocLazyLoad.load({
                        name: 'itecSuite',
                        files: [
                            'assets/modules/vagasOcupadas/vagasOcupadas.service.js',
                            'assets/modules/vagasOcupadas/vagasOcupadas.controller.js'
                        ],
                        cache: false
                    });
                }]
            }
        })
    // Utilizando o HTML5 History API
    //$locationProvider.html5Mode(true);
});