 angular.module("App")
.controller('ReposController', function ($scope, repos) {
      $scope.repos = [];

      repos.success(function (data) {
          $scope.posts = data;
          for (var i = data.length - 1; i >= 0; i--) {
              var repo = data[i];
              $scope.repos.push(repo.name);
          }
      });

      $scope.optionSelected = function (data) {
          $scope.$apply(function () {
              $scope.main_repo = data;
          })
      }

      $scope.clean = function() {
        $scope.main_repo = null;
        $('input').val(''); // Para limpiar el contenido del input de busqueda
      };
  })

  .factory('repos', function ($http) { // Esto lo hago en forma de factoria para ordenar un poco el código
      return $http.get("https://api.github.com/users/twitter/repos")
          .success(function (data) {
              return data;
          })
          .error(function (error) {
              return error;
          });
  })
.controller("RepoController",function($scope,$http,$routeParams){
      $scope.repo = {};
      $http.get("https://api.github.com/repos/twitter/"+$routeParams.name)
      .success(function(data){
        $scope.repo = data;
        })
      .error(function(err){

      });
});
