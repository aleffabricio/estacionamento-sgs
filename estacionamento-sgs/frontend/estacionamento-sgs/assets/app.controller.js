"use strict";
angular.module('app').controller('appController', appController);
appController.$inject = ['$rootScope', '$localStorage','$location'];

function appController($rootScope, $localStorage,$location) {

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
        var restrictedPage = $.inArray($location.path(), ['/login']) === -1;
        if (restrictedPage && $localStorage.user == undefined) {
            $location.path('/login');
        }
    });

}
