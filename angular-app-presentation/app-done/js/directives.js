var directives = angular.module('demo.directives', []);


directives.directive('todoEdit', function () {

    return {

        restrict: 'A',
        scope: {
            todo: '=',
            finish: '&'
        },
        templateUrl: 'partials/todo_edit.html',
        link: function ($scope, element, attrs) {

        }
    };
});

directives.directive('todoDetails', function () {

    return {

        restrict: 'A',
        scope: {
            todo: '='
        },
        templateUrl: 'partials/todo_details.html',
        link: function ($scope, element, attrs) {

        }
    };
});



