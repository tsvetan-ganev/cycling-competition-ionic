angular.module('app.controllers')

.controller('CyclistDetailsController', function ($scope, $stateParams, Cyclists) {
    $scope.cyclist = {};

    Cyclists.getCyclistById($stateParams.cyclistId).then(function (res) {
         $scope.cyclist = res.data;
    });
})