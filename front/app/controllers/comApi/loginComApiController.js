angular.module('meuApp')
    .controller('loginComApiController', function ($scope, $http) {

        
        $scope.login = {
            email: '',
            password: ''                   
        };
        
                $scope.logar = function () {
                    console.log("chegou:)");
            $url = 'http://localhost:8000/api/user/login';

            $http.post($url, $scope.login).then(function (response){
                console.log(response);
            }, function (error) {
                console.log(error);
           })
        }
        
            });
       

   