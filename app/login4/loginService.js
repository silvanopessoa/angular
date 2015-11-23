/**
 * Created by Silvano on 20/11/2015.
 */
app.service('loginService',function(){
        console.log("Criou o objeto Service");

        this.autenticar = function(usuario,senha){
            if(usuario === 'silvano@js' && senha==='123'){
                return true;
            }else{
                return false;
            }
        }
    });
