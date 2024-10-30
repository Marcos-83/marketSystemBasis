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
         url:'/trocarnome/criar', 
         templateUrl: 'app/views/exercicios/trocarNome.html', // Template da dashboard
         controller: 'trocarNomeController' // Controller para a dashboard
        })
        .state('main.calculadora',{
            url:'/calculadora', 
            templateUrl: 'app/views/exercicios/calculadora.html', // Template da dashboard
            controller: 'calculadoraController' // Controller para a dashboard
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
