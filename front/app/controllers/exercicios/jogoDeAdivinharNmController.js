angular.module('meuApp')
.controller("jogoDeAdivinharNmController", function($scope) {
    


 $scope.msgDeErro = "";
 $scope.msgDeErroDoJogo = "";

$scope.config = {
    minimo:0,
    maximo:0,
    intervalo:10,
    jogoIniciou:0,
    jogoFinalizado: 0
};

$scope.jogo = {
    numeroAleatorio:0,
    qtdTentativa:0,
    tentativa:0
}

$scope.iniciarJogo = function() {

    podeIniciar = false;
    podeIniciar = verificarIntervalo();

    if(podeIniciar == false) {
        $scope.msgDeErro = "O intervalo precisa ser de 10 números";
    }
    else {
        
        $scope.config.jogoIniciou = 1;
        $scope.jogo.numeroAleatorio = gerarNumeroAleatorio($scope.config.minimo, $scope.config.maximo);
    }
}

verificarIntervalo = function() {
    intervalo = $scope.config.maximo - $scope.config.minimo;
    if (intervalo < $scope.config.intervalo) {

        return false;
    }

   return true;

}

gerarNumeroAleatorio = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

$scope.adivinhar = function(){
    if($scope.jogo.tentativa == $scope.jogo.numeroAleatorio){
        $scope.msgDeErroDoJogo = "Você Acertou :)"
    }
    else{
        $scope.msgDeErroDoJogo = "Você Errou :("
    }

}

$scope.verificarSeAcertou = function() {
    if($scope.jogo.numeroAleatorio == $scope.jogo.tentativa){
        $scope.msgDeErroDoJogo = `Você acertou em ${$scope.jogo.qtdTentativa} tentativas!!!`;
                $scope.config.jogoFinalizado = 1;
    }
    else {
        $scope.msgDeErroDoJogo = 'Você errou!!';
        $scope.jogo.qtdTentativa++;
    }

    }

    $scope.resetar = function () {
        $scope.msgDeErro = "";
        $scope.msgDeErroDoJogo = "";

        $scope.config = {
            minimo: 0,
            maximo: 0,
            intervalo: 10,
            jogoFinalizado: 0,
            jogoIniciou: 0
        };

        $scope.jogo = {
            numeroAleatorio: 0,
            qtdTentativa: 0,
            tentativa: 0
        }
    }


})       