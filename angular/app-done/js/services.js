var services = angular.module('demo.services', []);

services.service('TodoService', function (TodoResource) {

    var service = {

        loadTodos: function () {
            return TodoResource.query();
        },

        save: function (todo, callback) {
            TodoResource.save({}, todo, callback);
        },

        update: function (todo, callback) {
            TodoResource.update({}, todo, callback);
        },

        delete: function (todo, callback) {
            TodoResource.delete({id: todo.id}, {}, callback);
        }
    };

    return service;

});
