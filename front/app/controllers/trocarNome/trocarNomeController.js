angular.module('meuApp')
    .controller('trocarNomeController', function ($scope) {
        // Lógica do controlador
        $scope.informacoes = 'Esta é uma área de usuários';

        $scope.informacoesMaisDetalhada = {
            nome: "Marcos",
            sobrenome: "Rodrigues"
        };

        $scope.count = 0;
        $scope.trocarInformacoes = function () {
        $scope.count++;
        // $scope.count = $scope.count +1;  **(Pode se ultilizar dessas 3 formas)**
        // $scope.count += 1;

            if ($scope.informacoesMaisDetalhada.nome == 'Marcos',
                $scope.informacoesMaisDetalhada.sobrenome == 'Rodrigues') {
                $scope.informacoesMaisDetalhada.nome = 'Nicolas'
                $scope.informacoesMaisDetalhada.sobrenome = 'Moreira';
            } else {
                $scope.informacoesMaisDetalhada = 'Marcos',
                    $scope.informacoesMaisDetalhada.sobrenome = 'Rodrigues';
            }
        }



        $scope.comparaInfo = function () {

            $valorUm = 0;
            $valorDois = '0';

            console.log($valorUm, typeof $valorUm);
            console.log($valorDois, typeof $valorDois);
            console.log($valorUm == $valorDois);
            console.log($valorUm === $valorDois);
        }

    });