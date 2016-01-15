angular.module('app.controllers')

.controller('CyclistDetailsController', function($scope, $stateParams, Cyclists) {
    $scope.cyclist = {};
    $scope.loading = true;
    $scope.error = false;
    
    $scope.load = function() {
        $scope.loading = true;

        Cyclists.getCyclistById($stateParams.cyclistId).then(function(res) {
            $scope.cyclist = res.data;
            $scope.loading = false;
            $scope.error = false;
        }, function(err) {
            $scope.loading = false;
            $scope.error = true;
        });
    }
    
    $scope.load();
});