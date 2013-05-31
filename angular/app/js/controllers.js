var controllers = angular.module('demo.controllers', []);

controllers.controller('TodoCtrl', function ($scope, pi, version, TodoService, UserResource) {

    $scope.pi = pi;
    $scope.version = version;

    $scope.todos = TodoService.loadTodos();

    $scope.users = UserResource.query();

    $scope.delete = function (todo) {
        TodoService.delete(todo, function () {
            $scope.todos = TodoService.loadTodos();
        })
    };

    $scope.addTodo = function (todo) {

        TodoService.save(todo, function () {
            $scope.todos = TodoService.loadTodos();
        });

        $scope.todo = {};
    };

    $scope.sayHello = function (user) {
        alert(user.fullName);
    };

});
