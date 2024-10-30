angular.module('meuApp')
    .controller('contadorController', function ($scope) {
        // Lógica do controlador

$scope.valor = {
    de: 0,
    ate: 0
};

$scope.valores = '';


$scope.contar = function(){
    $scope.valores = '';

    for($x = $scope.valor.de; $x <= $scope.valor.ate; $x++){
        $scope.valores = $scope.valores + ',' + $x;
    };
};


    });        