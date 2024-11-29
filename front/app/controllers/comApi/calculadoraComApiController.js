angular.module('meuApp')
    .controller('calculadoraComApiController', function ($scope, $http) {


        $scope.valores = {
            primeiro: 0,
            segundo: 0,
            resultado: 0
        };

        $scope.somar = function () {
            calcularTudo('+');
           /* $url = 'http://localhost:8000/api/calculadora/calcular';
            $dados = {
                valorUm: $scope.valores.primeiro,
                valorDois: $scope.valores.segundo,
                operacao: '+',
            };

            $http.post($url, $dados).then(function (response) {
                if(response.status == 200){
                    $scope.valores.resultado = response.data;
                } else {
                    $scope.valores.resultado = "Nada certo :("
                }
                console.log(response.data)
            }, function (erro) {
                console.log("Não bateu, ta errado!")
                console.log(erro);
                $scope.valores.resultado = "Está total errado! :("
            }) */

        // $scope.valores.resultado = $scope.valores.primeiro + $scope.valores.segundo;
        };

        $scope.subtrair = function () {
            calcularTudo('-');
          /*  $url = 'http://localhost:8000/api/calculadora/calcular';
            $dados = {
                valorUm: $scope.valores.primeiro,
                valorDois: $scope.valores.segundo,
                operacao: '-',
            };

            $http.post($url, $dados).then(function (response) {
                if(response.status == 200){
                    $scope.valores.resultado = response.data;
                } else {
                    $scope.valores.resultado = "Nada certo :("
                }
                console.log(response.data)
            }, function (erro) {
                console.log("Não bateu, ta errado!")
                console.log(erro);
                $scope.valores.resultado = "Está total errado! :("
            }) */
        // $scope.valores.resultado = $scope.valores.primeiro - $scope.valores.segundo;
        };

        $scope.multiplicar = function () {
            calcularTudo('*');
         /*   $url = 'http://localhost:8000/api/calculadora/calcular';
            $dados = {
                valorUm: $scope.valores.primeiro,
                valorDois: $scope.valores.segundo,
                operacao: '*',
            };

            $http.post($url, $dados).then(function (response) {
                if(response.status == 200){
                    $scope.valores.resultado = response.data;
                } else {
                    $scope.valores.resultado = "Nada certo :("
                }
                console.log(response.data)
            }, function (erro) {
                console.log("Não bateu, ta errado!")
                console.log(erro);
                $scope.valores.resultado = "Está total errado! :("
            }) */
        // $scope.valores.resultado = $scope.valores.primeiro * $scope.valores.segundo;
        };

        $scope.dividir = function () {
            calcularTudo('/');
          /*  $url = 'http://localhost:8000/api/calculadora/calcular';
            $dados = {
                valorUm: $scope.valores.primeiro,
                valorDois: $scope.valores.segundo,
                operacao: '/',
            };

            $http.post($url, $dados).then(function (response) {
                if(response.status == 200){
                    $scope.valores.resultado = response.data;
                } else {
                    $scope.valores.resultado = "Nada certo :("
                }
                console.log(response.data)
            }, function (erro) {
                console.log("Não bateu, ta errado!")
                console.log(erro);
                $scope.valores.resultado = "Está total errado! :("
            })

            if ($scope.valores.segundo == 0) {
                $scope.valores.resultado = "impossível dividir por 0";

            } else {
                $scope.valores.resultado = $scope.valores.primeiro / $scope.valores.segundo;
            } */
        };


        $scope.limpar = function () {
            $scope.valores.primeiro = 0;
            $scope.valores.segundo = 0;
            $scope.valores.resultado = 0;

        };

        calcularTudo = function ($operacao) {
            $url = 'http://localhost:8000/api/calculadora/calcular';
            $dados = {
                valorUm: $scope.valores.primeiro,
                valorDois: $scope.valores.segundo,
                operacao: $operacao,
            };

            $http.post($url, $dados).then(function (response) {
                if(response.status == 200){
                    $scope.valores.resultado = response.data;
                } else {
                    $scope.valores.resultado = "Nada certo :("
                }
                console.log(response.data)
            }, function (erro) {
                console.log("Não bateu, ta errado!")
                console.log(erro);
                $scope.valores.resultado =  erro.data + '' + erro.status; //"Está total errado! :("
            })

        // $scope.valores.resultado = $scope.valores.primeiro + $scope.valores.segundo;
        };


    });