 angular.module("App")
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
        attrs.$observe('backImg', function (value) {
            elem.css({
              "background": "url("+value+")",
              "background-size": "cover",   //duda porque al meterlo en el css no funciona
              "background-position": "center",
            });
        });
    }
})
