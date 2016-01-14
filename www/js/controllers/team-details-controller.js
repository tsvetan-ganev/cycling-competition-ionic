angular.module('app.controllers')

.controller('TeamDetailsController', function($scope, $stateParams, Teams) {
    $scope.team = {};
    $scope.loading = true;

    Teams.getTeamById($stateParams.teamId).then(function(res) {
        $scope.team = res.data;
        $scope.loading = false;
    });
});