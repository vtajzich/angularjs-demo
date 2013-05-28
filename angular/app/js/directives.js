var directives = angular.module('demo.directives', []);

directives.directive('listManager', function () {

    return {

        restrict: 'A',
        scope: {
            items: '=',
            search: '='
        },
        transclude: true,
        templateUrl: 'partials/list.html',
        controller: function ($scope) {

            var pole = [];

            this.addToList = function (item) {
                console.log('added');
                console.log(item);
            };

            this.removeFromList = function (item) {
                console.log('removed');
                console.log(item);
            };

        },
        link: function ($scope, element, attrs) {

        }
    };
});


directives.directive('todo', function () {

    return {

        require: '^listManager',
        restrict: 'AE',
        scope: {
            todo: '=',
            delete: '&',
            update: '&'
        },
        templateUrl: 'partials/todo.html',
        controller: function ($scope) {

            $scope.doDelete = function () {

                $scope.delete()($scope.todo);
            };

        },
        link: function ($scope, element, attrs, ctrl) {

            $scope.$watch('selected', function (newValue, oldValue) {

                if(newValue) {
                    ctrl.addToList($scope.todo);
                } else {
//                    ctrl.removeFromList($scope.todo);
                }
            });
        }
    };
});

