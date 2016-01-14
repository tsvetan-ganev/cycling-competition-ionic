angular.module('app.controllers')

.controller('TeamDetailsController', function ($scope, $stateParams, Teams) {
    $scope.team = {};
    
    Teams.getTeamById($stateParams.teamId).then(function (res) {
        console.log($stateParams.teamId);
         $scope.team = res.data;
    });
});