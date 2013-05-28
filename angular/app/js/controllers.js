var controllers = angular.module('demo.controllers', []);

controllers.controller('TodoCtrl', function ($scope, PI, version, TodoService) {

    var loadData = function () {
        $scope.todos = TodoService.list();
    }

    loadData();

    $scope.send = function () {
        console.log($scope.name);
    };

    $scope.save = function () {
        TodoService.save($scope.todo, loadData);
        $scope.todo = {};
    };

    $scope.delete = function (todo) {
        TodoService.delete(todo, loadData);
    };

    $scope.mojeMetoda = function (todo) {
        TodoService.update(todo, loadData);
    };

    $scope.deleteAll = function(todos) {

    };
});
