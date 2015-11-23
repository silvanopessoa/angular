/**
 * Created by Silvano on 21/10/2015.
 */
app.controller('LoginController',['$scope','Credencial','loginService','loginConstant',function($scope,Credencial,loginService,loginConstant){
    console.log("Criou o objeto controller");

    //Factory
    $scope.model = new Credencial();
    //Constant
    $scope.place=loginConstant;

    //valida se a credencial inválida
    $scope.model.logar = function(){
        var isAutenticado= loginService.autenticar($scope.model.credencial.usuario,$scope.model.credencial.senha);
        if(isAutenticado){
            $scope.model.msg.status='logado';
        }else{
            $scope.model.msg.status='credencial inválida';
        }
        console.log(model.msg.status);
    }
}]);
