/**
 * Created by Silvano on 18/11/2015.
 */
var login = angular.module('login',['lrNotifier','ngAnimate']);
login.factory('Credencial',function(){

        //init presentation model
        var Credencial= function() {

            //place holders
            this.place = {};
            this.place.login = 'silvanojava@yahoo.com.br';
            this.place.senha = '12345678';

            //credencial
            this.credencial = {};
            this.credencial.usuario = '';
            this.credencial.senha = '';

            //messages
            this.msg = {};
            this.msg.status = '';
        }
        return Credencial;

});