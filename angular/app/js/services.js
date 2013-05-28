var services = angular.module('demo.services', []);

services.service('TodoService', function (TodoResource) {

    var todos = [];

    var service = {

        loadTodos: function () {

            todos = TodoResource.query();

            return todos;
        },

        save: function (todo) {
            TodoResource.save({}, todo, function (data) {
                todos.push(data);
            },service.loadTodos);
        },

        update: function (todo) {
            TodoResource.update({}, todo, function () {

            }, service.loadTodos);
        },

        delete: function (todo) {
            TodoResource.delete({id: todo.id}, {}, function () {

                var index = todos.indexOf(todo);
                todos.splice(index, 1);

            }, service.loadTodos);
        }
    };

    return service;

});
