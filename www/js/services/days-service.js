angular.module('app.services')

    .factory('Days', ['$http', function ($http) {
        var getAll = function () {
            return $http.get('http://cyclingcompetition.azurewebsites.net/api/program/days');
        };

        var getDayById = function (dayId) {
            return $http.get('http://cyclingcompetition.azurewebsites.net/api/program/days/' + dayId);
        }

        return {
            getAll: getAll,
            getDayById: getDayById
        };
    }])