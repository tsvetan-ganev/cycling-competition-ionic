angular.module('app.controllers')

.controller('TeamsController', function($scope, Teams) {
    $scope.teams = [];
    $scope.loading = true;

    Teams.getAll().then(function(res) {
        $scope.teams = res.data;
        $scope.loading = false;
    });
});