var controllers = angular.module('demo.controllers', []);

controllers.controller('TodoCtrl', function ($scope, TodoService, pi, UserResource) {

    $scope.todos = TodoService.loadTodos();

    $scope.users = UserResource.query();

    $scope.pi = pi;

    $scope.addTodo = function () {

        TodoService.save($scope.todo);

        $scope.todo = {};
    };

    $scope.delete = function (todo) {
        TodoService.delete(todo);
    };
});

