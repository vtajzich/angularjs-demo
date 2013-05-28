var filters = angular.module('demo.filters', []);

filters.filter('customFilter', function (PI) {

    return function (value, arg) {
        return value + ' modified ' + arg * PI
    }

});
