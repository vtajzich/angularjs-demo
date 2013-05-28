var resources = angular.module('demo.resources', []);

resources.constant('baseUrl', 'http://localhost\\:8080/server/rest');

resources.constant('gavatarUrl', 'http://www.gravatar.com/avatar/:hash');

resources.factory('TodoResource', function ($resource, baseUrl) {

    return $resource(baseUrl + '/todos/:id', {}, {
        'update' : {method: 'PUT'}
    });
});

resources.factory('UserResource', function ($resource, baseUrl) {

    return $resource(baseUrl + '/users/:id', {}, {
        'update' : {method: 'PUT'}
    });
});

resources.factory('GavatarResource', function ($resource, gavatarUrl) {
    return $resource(gavatarUrl, {}, {});
});
