/**
 * Created by Silvano on 18/11/2015.
 */
app.factory('Credencial',function(){
        console.log("Criou o objeto Factory");
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