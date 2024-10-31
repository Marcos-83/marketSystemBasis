angular.module("meuApp")
.controller('calculadoraDeIdadeController', function ($scope){

$scope.info = {
    dataDeNascimento: "",
    resultado: ""
};

$scope.calcularIdade = function() {
    DataDeNascimento = new Date($scope.info.DataDeNascimento);
    hoje = new Date();

    anos = hoje.getFullYear() - dataDeNascimento.getFullYear();
    meses = hoje.getMonth() - dataDeNascimento.getMonth();
    dias = hoje.getDate() - dataDeNascimento.getDate();

    if (dias < 0) {
        meses --;
        dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
    }

    if(meses < 0) {
        anos --;
        meses += 12;    
    }


};

});