angular.module('meuApp')
    .controller('conversorController', function($scope) {

    $scope.mensagem = 'Com certeza deu certo';    

    $scope.unidade = {
        quilometros: 0,
        metros: 0,
        centimetros: 0,
        milimetros: 0
    }
    
    $scope.converter = function(){

        console.log('clicou');

        console.log($scope.unidade);

        
        $scope.unidade.quilometros = $scope.unidade.centimetros / 100000;
        $scope.unidade.metros = $scope.unidade.centimetros / 100;
        $scope.unidade.milimetros = $scope.unidade.centimetros * 10;


    }


});


    


