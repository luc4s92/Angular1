angular.module("MyFirstApp",[])
.controller("FirstController",function($scope){
  $scope.nombre = "Lucas";
  $scope.nuevoComentario = {};
  $scope.comentarios = [
    {
      comentario: "Buenas prendas",
      username: "juan22"
    },
    {
      comentario: "nuevas botas",
      username: "ntd"
    }
  ];
  $scope.agregarComentario = function(){
    $scope.comentarios.push($scope.nuevoComentario);
    $scope.nuevoComentario ={};
  }
});
