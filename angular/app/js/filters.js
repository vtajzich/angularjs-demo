var filters = angular.module('demo.filters', []);

filters.filter('muj', function () {

    return function (arg, arg2) {
        return arg + " suffix"
    }

});
