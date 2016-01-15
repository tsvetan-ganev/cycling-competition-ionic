angular.module('app.controllers')

.controller('TeamDetailsController', function($scope, $stateParams, Teams) {
    $scope.team = {};
    $scope.loading = true;
    $scope.error = false;

    $scope.load = function() {
        $scope.loading = true;
        
        Teams.getTeamById($stateParams.teamId).then(function(res) {
            $scope.team = res.data;
            $scope.loading = false;
            $scope.error = false;
        }, function(err) {
            $scope.loading = false;
            $scope.error = true;
        });
    }
    
    $scope.load();
});