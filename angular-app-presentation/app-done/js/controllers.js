var controllers = angular.module('demo.controllers', []);


controllers.controller('TodoCtrl', function ($scope, TodoService) {

    var ctrl = {

        init: function () {
            ctrl.loadTodos();
            ctrl.initNewTodo();
        },

        initNewTodo: function () {
            $scope.todo = undefined;
        },

        loadTodos: function () {
            $scope.todos = TodoService.findAll();
        }
    };

    $scope.addTodo = function () {

        console.log('addTodo');

        TodoService.addTodo(TodoService.data.current, function () {
            ctrl.loadTodos();
            ctrl.initNewTodo();
        });
    };

    $scope.deleteTodo = function () {
        TodoService.delete(TodoService.data.current);
        ctrl.loadTodos();
    };

    $scope.updateTodo = function () {

        TodoService.update(TodoService.data.current, function () {
            ctrl.loadTodos();
            ctrl.initNewTodo();
        });
    };


    $scope.selectTodo = function (todo) {
        TodoService.data.current = todo;

        console.log('selected todo:');
        console.log(TodoService.data.current);
    };

    ctrl.init();

    return ctrl;
});


controllers.controller('EditController', function ($scope, TodoService) {

    $scope.data = TodoService.data;
});
