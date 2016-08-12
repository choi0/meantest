'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider
        .html5Mode(true);

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })
        .when('/vaccinations', {
            templateUrl: 'views/vaccinations.html',
            controller: 'VaccinationsCtrl'
        })
        .when('/alerts', {
            templateUrl: 'views/alerts.html',
            controller: 'AlertsCtrl'
        })
        .when('/error', {
            templateUrl: 'views/error.html',
        })
        .when('/:param1', {
            templateUrl: 'views/homelogin.html',
            controller: 'HomeLoginCtrl'
        })
        .otherwise({redirectTo: '/'});
}]);