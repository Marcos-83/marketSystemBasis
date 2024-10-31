angular.module("meuApp")
    .controller('palindromoController' , function ($scope) {

$scope.resultado = "";

$scope.palavra = {
    original: '',
    resultado: ''
};

$scope.palindromo = function (){
    $scope.palavra.invertida = $scope.palavra.original.split('').reverse('').join('');
    if ($scope.palavra.original == $scope.palavra.invertida) {
        $scope.resultado = 'É palindromo.';
    
    } else {
        $scope.resultado = 'Não é palindromo.';

    };
};

    });