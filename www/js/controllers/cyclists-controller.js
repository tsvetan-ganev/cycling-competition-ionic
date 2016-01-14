angular.module('app.controllers')

.controller('CyclistsController', function ($scope, Cyclists) {
    $scope.cyclists = [];

    Cyclists.getAll().then(function (res) {
        console.log(res.data);
         $scope.cyclists = res.data;
    });
});