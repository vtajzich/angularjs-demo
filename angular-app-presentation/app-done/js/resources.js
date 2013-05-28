var resources = angular.module('demo.resources', []);

resources.factory('TodoResource', function ($http, $resource) {

    var baseUrl = 'http://localhost\\:3000/todos/:id'

    return $resource(baseUrl, {}, {
        'update' : {method: 'PUT'}
    });
});
