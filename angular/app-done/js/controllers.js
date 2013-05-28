var controllers = angular.module('demo.controllers', []);

controllers.controller('TodoCtrl', function ($scope, TodoService, pi, UserResource) {

    var loadTodos = function () {
        $scope.todos = TodoService.loadTodos();
    };

    loadTodos();

    $scope.users = UserResource.query();

    $scope.pi = pi;

    $scope.addTodo = function () {

        TodoService.save($scope.todo, loadTodos);

        $scope.todo = {};
    };

    $scope.delete = function (todo) {
        TodoService.delete(todo, loadTodos);
    };
});

