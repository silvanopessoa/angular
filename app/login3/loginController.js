/**
 * Created by Silvano on 21/10/2015.
 */
app.controller('LoginController',['$scope','lrNotifier','Credencial','loginService','loginConstant',function($scope,notifier,Credencial,loginService,loginConstant){
    console.log("Criou o objeto controller");

    //Factory
    $scope.model = new Credencial();
    //Constant
    $scope.place=loginConstant;
    $scope.channel=notifier('channelName');

    //valida se a credencial inválida
    $scope.model.logar = function(){
        $scope.channel.removeNotification($scope.channel.notifications);
        var isAutenticado= loginService.autenticar($scope.model.credencial.usuario,$scope.model.credencial.senha);
        if(isAutenticado){
            $scope.model.msg.status='logado';
        }else{
            $scope.model.msg.status='credencial inválida';
            $scope.channel.info('Usuário ou senha inválida.');
        }
        console.log(model.msg.status);
    }
}]);
