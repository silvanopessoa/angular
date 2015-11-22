/**
 * Created by Silvano on 21/10/2015.
 */
angular.module('login',['lrNotifier','ngAnimate'])
    .controller('LoginController',['$scope','lrNotifier','Credencial',function($scope,notifier,Credencial){

    console.log("Criou o objeto controller");

    $scope.model = new Credencial();

    $scope.channel=notifier('channelName');

    //valida se a credencial inválida
    $scope.model.logar = function(){
        channel.removeNotification(channel.notifications);
        if(model.credencial.usuario === 'silvano@js' && model.credencial.senha==='123'){
            model.msg.status='logado';
        }else{
            model.msg.status='credencial inválida';
            //push a notification object on the channel
            //channel.pushNotification({message:'hello channel', otherProp:'other'});

            channel.info('Usuário ou senha inválida.');
            //is equivalent to pushNotification({level:'info',message:'a great message')
        }
        console.log(model.msg.status);
    }
}]).factory('Credencial',function(){

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
