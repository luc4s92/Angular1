angular.module("CustomDirective", [])

.controller("AppCrtl",function($scope,$http) {
  $http.get("https://api.github.com/users/codigofacilito/repos") //no estoy seguro si va a retornar los valores
  .success(function(data){
    $scope.repos = data;
  })
  .error(function(err){
      console.log(err);
  });
});
