var services = angular.module('demo.services', []);

services.service('TodoService', function (TodoResource) {

    var service = {

        data: {
            current: undefined
        },

        add: function (todo, callback) {
            TodoResource.save([], todo, callback);
        },

        delete: function (todo) {
            TodoResource.delete({id: todo['_id']});
        },

        update: function (todo, callback) {
            TodoResource.update({id: todo['_id']}, todo, callback);
        },

        findAll: function () {
            return TodoResource.query();
        }
    };

    return service;

});
