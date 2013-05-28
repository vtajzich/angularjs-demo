var directives = angular.module('demo.directives', []);

directives.directive('gavatar', function (GavatarResource) {

    return {

        restrict: 'AE',
        scope: {
            user: '='
        },
        templateUrl: 'partials/gavatar.html',
        link: function ($scope, element, attrs) {
        }
    };
});

