angular.module('app.controllers')

.controller('TeamsController', function($scope, Teams) {
    $scope.teams = [];
    $scope.loading = true;
    $scope.error = false;
    
    $scope.load = function() {
        $scope.loading = true;
        
        Teams.getAll().then(function(res) {
            $scope.teams = res.data;
            $scope.loading = false;
            $scope.error = false;
        }, function(err) {
            $scope.loading = false;
            $scope.error = true;
        });
    }
    
    $scope.load();
});