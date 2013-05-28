var services = angular.module('demo.services', []);

services.service('demoServiceForFilter', function () {

    var service = {

        multiply: function (arg) {
            return 2 * arg;
        }
    };

    return service;

});

services.service('TodoService', function (TodoResource) {

    var service = {

        loadTodos: function () {
            return TodoResource.query();
        },

        saveOrUpdate: function (todo, callback) {

            if(angular.isDefined(todo.id)) {
                TodoResource.save({}, todo, callback);
            } else {
                TodoResource.update({}, todo, callback);
            }
        },

        delete: function (todo, callback) {
            TodoResource.delete({id: todo.id}, undefined, callback);
        }

    };

    return service;

});
