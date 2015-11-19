/**
 * Created by Silvano on 21/10/2015.
 */
angular.module('login',['lrNotifier','ngAnimate'])
    .controller('LoginController',['lrNotifier',function(notifier){
        
        //init presentation model
        var model= this;

        //place holders
        model.place= {};
        model.place.login='vanessa@palas';
        model.place.senha='12345678';

        //credencial
        model.credencial={};
        model.credencial.usuario='';
        model.credencial.senha='';

        //messages
        model.msg={};
        model.msg.status='';

        var channel=notifier('channelName');

        //valida se a credencial inválida
        model.logar = function(){
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
    }]);
