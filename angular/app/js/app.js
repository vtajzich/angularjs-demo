var app = angular.module('app', ['ngResource', 'demo.controllers', 'demo.directives', 'demo.filters', 'demo.resources', 'demo.services']);

app.constant('pi', 3.14);
app.value('version', '1.0-SNAPSHOT');
