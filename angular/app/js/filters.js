var filters = angular.module('demo.filters', []);

filters.filter('myFilter', function () {

    return function (arg, arg2) {

        return arg + ' something ' + arg2;
    }

});
