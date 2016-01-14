angular.module('app.controllers')

.controller('TeamsController', function ($scope, Teams) {
    $scope.teams = [];
    
    Teams.getAll().then(function (res) {
         $scope.teams = res.data;
    });
})