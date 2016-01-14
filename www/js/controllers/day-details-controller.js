angular.module('app.controllers')

.controller('DayDetailsController', function($scope, $stateParams, $filter, Days) {
    $scope.day = {};
    $scope.competitions = [];
    $scope.loading = true;


    Days.getDayById($stateParams.dayId).then(function(res) {
        $scope.day = res.data.day;
        $scope.competitions = res.data.competitions;

        $scope.competitions.forEach(function(competition) {
            var dateObj = new Date('1970-01-01T' + competition.startingTime);
            competition.startingTime = $filter('date')(dateObj, 'HH:mm');
        }, this);

        $scope.loading = false;
    });
});