angular.module("CustomDirective", [])
.directive('backImg',function(){
    return function(scope,element,attrs) {
        attrs.$observe('backImg',function(value){
          element.css({
              "background": "url("+value+")",
              "background-size": "cover",
              "background-position": "center",
          });
        });
    }
})
.controller("AppCrtl",function($scope,$http) {
  $http.get("https://api.github.com/users/codigofacilito/repos") //no estoy seguro si va a retornar los valores
  .success(function(data){
    $scope.repos = data;
  })
  .error(function(err){
      console.log(err);
  });
});
