angular.module('app.controllers')

.controller('CyclistsController', function($scope, Cyclists) {
    $scope.cyclists = [];
    $scope.loading = true;
    $scope.error = false;
    
    $scope.load = function() {
        $scope.loading = true;
        
        Cyclists.getAll().then(function(res) {
            $scope.cyclists = res.data;
            $scope.loading = false;
            $scope.error = false;
        }, function(err) {
            $scope.loading = false;
            $scope.error = true;
        });
    }
    
    $scope.load();
});