var app = angular.module('angularDemoApp', ['ui', 'ngResource', 'demo.filters', 'demo.directives', 'demo.services', 'demo.controllers', 'demo.resources']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {templateUrl: 'partials/list.html', controller: 'TodoCtrl'});


//    $routeProvider.when('/deals', {templateUrl: 'partials/dealList.html', controller: 'DealListCtrl'});

//    $routeProvider.when('/deal/details/:id', {templateUrl: 'partials/dealDetail.html', controller: 'DealDetailCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
}]);
