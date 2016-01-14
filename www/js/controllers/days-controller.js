angular.module('app.controllers')

    .controller('DaysController', function ($scope, Days) {
        $scope.days = [];
        $scope.loading = true;

        Days.getAll().then(function (res) {
            $scope.days = res.data;
            $scope.loading = false;
        });
    });