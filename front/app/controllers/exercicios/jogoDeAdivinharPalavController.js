angular.module('meuApp')
    .controller("jogoDeAdivinharPalavController", function ($scope) {

        /*
             Serão duas divs, uma para iniciar o jogo e outra para tentar adivinhar a palavra.
             as palavras estarão numa variável chamada Palavras!
     
             Na sequencia, evolução do sistema, na primeira div o usuário deve informar palavras separadas por ;.
             Evolução 2: escolher o tema!
             */



        $scope.jogo = {
            palavraTentada: '',
            qtdTentativa: 0,
            qtdLetrasIguais: 0,
            jogoIniciado: 0,
            msg: '',
            tema: 'frutas',
            palavraOutros: ''
        }

        $frutas = [
            'abacaxi', 'banana', 'laranja', 'morango', 'coco',
            'melancia', 'pessego', 'uva', 'pera',
            'ameixa', 'kiwi', 'manga', 'framboesa', 'limao',
            'tangerina', 'cereja', 'amora', 'maracuja', 'goiaba'
        ];

        $carros = [
            'fusca', 'gol', 'civic', 'corolla', 'camaro',
            'mustang', 'x6', 'tucson', 'fiesta', 'hilux',
            'onix', 'kwid', 'jeep', 'chery', 'bmw',
            'audi', 'tracker', 'hrv', 'renegade'
        ];

        $cores = [
            'vermelho', 'azul', 'verde', 'amarelo', 'roxo',
            'laranja', 'rosa', 'preto', 'branco', 'cinza',
            'bege', 'marrom', 'turquesa', 'prata', 'ouro',
            'limao', 'pessego', 'acai', 'salmon', 'violeta'
        ];

        $generos = [
            'acao', 'comedia', 'drama', 'terror', 'romance',
            'ficcao', 'fantasia', 'documentario', 'misterio', 'animacao',
            'aventura', 'suspense', 'musical', 'guerra', 'historico',
            'policial', 'familia', 'biografia', 'estrangeiro'
        ];


        $scope.palavraAleatoria = '';

        $scope.iniciarJogo = function () {
            $scope.jogo.jogoIniciado = 1;

            if ($scope.jogo.tema == 'frutas') {
                palavras = $frutas;
            } else if ($scope.jogo.tema == 'carros') {
                palavras = $carros;
            } else if ($scope.jogo.tema == 'cores') {
                palavras = $cores;
            } else if ($scope.jogo.tema == 'generos') {
                palavras = $generos;
            } else {
                palavras = $scope.jogo.palavraOutros.split(';');
            }


            $scope.palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];

            console.log($scope.palavraAleatoria)

            //iniciar jogo
        }

        $scope.reiniciarJogo = function () {

            $scope.jogo = {
                palavraTentada: '',
                qtdTentativa: 0,
                qtdLetrasIguais: 0,
                jogoIniciado: 0,
                msg: ''
            }
        }

        $scope.testarPalavra = function () {
            $scope.jogo.qtdTentativa++;
            $scope.jogo.qtdLetrasIguais = calcularLetrasIguais();

            if ($scope.palavraAleatoria == $scope.jogo.palavraTentada) {
                $scope.jogo.msg = 'Você acertou!!!'
                $scope.jogo.jogoIniciado = 2;
            }
            else {
                $scope.jogo.msg = "Poxa, ainda não acertou..."
            }
        }

        calcularLetrasIguais = function () {
            palavra1 = $scope.palavraAleatoria;
            palavra2 = $scope.jogo.palavraTentada;



            contador = 0;
            comprimento = Math.min(palavra1.length, palavra2.length);

            for (let i = 0; i < comprimento; i++) {
                if (palavra1[i] === palavra2[i]) {
                    contador++;
                }
            }

            return contador;
        }



    });