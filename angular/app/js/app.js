var app = angular.module('angularDemoApp', ['ui', 'ngResource', 'demo.filters', 'demo.directives', 'demo.services', 'demo.controllers', 'demo.resources']);

app.config(['$routeProvider', function ($routeProvider) {

//    $routeProvider.when('/', {templateUrl: 'partials/list.html', controller: 'TodoCtrl'});
//    $routeProvider.otherwise({redirectTo: '/'});
}]);

app.constant('PI', 3.14);

app.value('version', '1.0.0-SNAPSHOT');

