/**
 * Created by Silvano on 03/12/2015.
 */
var app = angular
    .module('app',['ngRoute'])
    .controller('indexController',function($scope,$route,$routeParams,$location){
        $scope.$route=$route;
        $scope.$location=$location;
        $scope.$routeParams=$routeParams;
        console.log('ENTROU AQUIIIIIIIIIIIII 1');
    })
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $routeProvider
            .when('/home',{
                templateUrl:'/app/menu2/home2.html',
                controller:'homeController'
            }).otherwise({
            redirect:'/'
        });
        $locationProvider.hashPrefix('!');
        //$locationProvider.html5Mode(true);
    }]);
