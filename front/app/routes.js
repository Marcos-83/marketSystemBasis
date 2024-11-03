angular.module('meuApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    

    $stateProvider
        .state('main', {
            abstract: true,
            templateUrl: 'app/views/partials/comHeaderFooterEMenu.html', // Template com header, sidebar e footer
        })

        .state('main.home', {
            url: '/',
            templateUrl: 'app/views/home.html', // Template da dashboard
            controller: 'testeController' // Controller para a dashboard
        })

        .state('main.trocarnome',{
         url:'/exercicios/trocarnome', 
         templateUrl: 'app/views/exercicios/trocarNome.html', // Template da dashboard
         controller: 'trocarNomeController' // Controller para a dashboard
        })

        .state('main.calculadora',{
            url:'/exercicios/calculadora', 
            templateUrl: 'app/views/exercicios/calculadora.html', // Template da dashboard
            controller: 'calculadoraController' // Controller para a dashboard
           })

           .state('main.contador',{
            url:'/exercicios/contador', 
            templateUrl: 'app/views/exercicios/contador.html', // Template da dashboard
            controller: 'contadorController' // Controller para a dashboard
           })

           .state('main.calculadoraImc',{
            url:'/exercicios/calculadoraImc', 
            templateUrl: 'app/views/exercicios/calculadoraImc.html', // Template da dashboard
            controller: 'calculadoraImcController' // Controller para a dashboard
           })

           .state('main.calculadoraDeIdade',{
            url:'/exercicios/calculadoraDeIdade', 
            templateUrl: 'app/views/exercicios/calculadoraDeIdade.html', // Template da dashboard
            controller: 'calculadoraDeIdadeController' // Controller para a dashboard
           })

           .state('main.palindromo',{
            url:'/exercicios/palindromo', 
            templateUrl: 'app/views/exercicios/palindromo.html', // Template da dashboard
            controller: 'palindromoController' // Controller para a dashboard
           })

           .state('main.conversor', {
            url:'/exercicios/conversor',
            templateUrl: 'app/views/exercicios/conversor.html',
            controller: 'conversorController'
           })

           

        // .state('login', {
        //     url: '/login',
        //     templateUrl: 'app/partials/login.html', // Apenas um conteúdo sem partials
        //     controller: 'LoginController' // Controller para o login
        // })
        // .state('main.produtos', {
        //     url: '/produtos',
        //     templateUrl: 'app/partials/produtos.html', // Outra página que usa o layout com partials
        //     controller: 'ProdutosController'
        // });




        $urlRouterProvider.otherwise('/');
});
