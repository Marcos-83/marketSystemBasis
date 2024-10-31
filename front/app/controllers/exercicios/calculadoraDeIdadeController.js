angular.module("meuApp")
.controller('calculadoraDeIdadeController', function ($scope){

$scope.info = {
    nome: '',
    dataDeNascimento: "",
    resultado: ''
};

$scope.pessoas = [];


$scope.calcularIdade = function() {
    dataNascimento = new Date($scope.info.dataDeNascimento);
    hoje = new Date();

    anos = hoje.getFullYear() - dataNascimento.getFullYear();
    meses = hoje.getMonth() - dataNascimento.getMonth();
    dias = hoje.getDate() - dataNascimento.getDate();

    if (dias < 0) {
        meses --;
        dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
    }

    if(meses < 0) {
        anos--;
        meses += 12;    
    }

    $scope.info.resultado = `Você tem ${anos} anos, ${meses} meses e ${dias} dias.`;

     $scope.pessoas.push(angular.copy($scope.info));

};

});