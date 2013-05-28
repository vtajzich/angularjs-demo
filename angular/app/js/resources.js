var resources = angular.module('demo.resources', []);

resources.factory('TodoResource', function ($http, $resource) {

    var baseUrl = 'http://localhost\\:8080/server/rest/todos/:id'

    return $resource(baseUrl, {}, {
        'update' : {method: 'PUT'}
    });
});
