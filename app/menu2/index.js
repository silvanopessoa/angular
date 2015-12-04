/**
 * Created by Silvano on 03/12/2015.
 */
var app = angular
    .module('app',['ngRoute'])
    .controller('indexController',function($scope,$route,$routeParams,$location){
        $scope.$route=$route;
        $scope.$location=$location;
        $scope.$routeParams=$routeParams;
    })
    .config(function($routeProvider,$locationProvider){
        $routeProvider
            .when('/home',{
                templateUrl:'../menu2/home.html',
                controller:'homeController'
            }).otherwise({
            redirect:'/'
        });
        $locationProvider.html5Mode(true);
    });
