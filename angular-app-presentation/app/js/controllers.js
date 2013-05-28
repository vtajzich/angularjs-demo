var controllers = angular.module('demo.controllers', []);

controllers.controller('TodoCtrl', function ($scope, TodoService, version) {

    var reloadCallback = function () {
        $scope.todos = TodoService.loadTodos();
    }

    reloadCallback();

    $scope.delete = function (todo) {
        TodoService.delete(todo, reloadCallback);
    };

    $scope.save = function (todo) {
        TodoService.saveOrUpdate(todo, reloadCallback);
    };

    $scope.add = function (todo) {
        $scope.save(todo)
        $scope.todo = {};
    };

    $scope.version = version;
});
