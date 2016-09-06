 angular.module("App", [])
  .controller('AppCtrl', function ($scope, repos) {
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
    .directive('myAutocomplete', function () {
        function postLink($scope, elem, attrs) {
            $(elem).autocomplete({
                //source: $scope.$eval(attrs.myAutocomplete),
                source: $scope[attrs.myAutocomplete],
                select: function (ev, ui) {
                    ev.preventDefault();
                    if (ui.item) {
                        $scope.optionSelected(ui.item.value);
                    }
                },
                focus: function (ev, ui) {
                    ev.preventDefault();
                    $(this).val(ui.item.label);
                }
            });
        };

        return {
            link: postLink
        };
    })
    .directive('backImg', function () {
        return function ($scope, elem, attrs) {
            attrs.$observe('backImg', function (v) {
                elem.css({
                  "background": "url("+value+")",
                  "background-size": "cover",   //duda porque al meterlo en el css no funciona
                  "background-position": "center",
                });
            });
        }
    })
    .factory('repos', function ($http) { // Esto lo hago en forma de factoria para ordenar un poco el código
        return $http.get("https://api.github.com/users/codigofacilito/repos")
            .success(function (data) {
                return data;
            })
            .error(function (error) {
                return error;
            });
    });
