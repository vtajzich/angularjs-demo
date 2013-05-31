var directives = angular.module('demo.directives', []);

directives.directive('avatar', function () {

    return {

        restrict: 'AE',
        scope: {
            user: '=',
            sayHello: '&'
        },
        templateUrl: 'partials/gravatar.html',
        link: function ($scope, element, attrs) {

        }
    };
});
