angular.module('app.controllers')

.controller('CyclistsController', function($scope, Cyclists) {
    $scope.cyclists = [];
    $scope.loading = true;

    Cyclists.getAll().then(function(res) {
        $scope.cyclists = res.data;
        $scope.loading = false;
    });
});