angular.module('app.controllers')

.controller('DaysController', function($scope, Days) {
    $scope.days = [];
    $scope.loading = true;
    $scope.error = false;

    $scope.load = function() {
        $scope.error = false;
        $scope.loading = true;
        Days.getAll().then(function(res) {
            $scope.days = res.data;
            $scope.loading = false;
            $scope.error = false
        }, function(err) {
            $scope.loading = false;
            $scope.error = true;
        });
    };

    $scope.load();
});