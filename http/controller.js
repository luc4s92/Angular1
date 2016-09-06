angular.module("MyFirstApp",[])
.controller("FirstController",function($scope,$http){
        $http.get("http://jsonplaceholder.typicode.com/post")
            .success(function(data){
                console.log(data)
            })
            .error(function(err){

            });
    });
